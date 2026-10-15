import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { parseHTML } from 'linkedom';
import { portfolio } from '../src/data/portfolio.js';
import { renderPortfolio } from '../src/ui.js';
import { renderPage } from '../scripts/render-page.js';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('the supplied hero bio stays unchanged while additional background is present in static HTML', () => {
  const { document } = parseHTML(renderPage(html, portfolio));
  assert.equal(document.querySelector('[data-bio]').textContent, 'Undergraduate Computer Science student at University of Indonesia');
  assert.equal(document.querySelector('[data-full-name]').textContent, 'Iqbal Rafi Nuryana');
  assert.equal(document.querySelector('[data-about-link]').getAttribute('href'), '#profil');
  assert.equal(document.querySelector('#profil').hidden, false);
  assert.equal(document.querySelectorAll('#education-list .background-entry').length, 1);
  assert.equal(document.querySelectorAll('#experience-list .background-entry').length, 2);
  assert.ok(document.querySelector('#experience-list').textContent.includes('Introduction to Computer Organization'));
  assert.ok(document.querySelector('a[href="https://www.linkedin.com/in/iqbal-rafi-nuryana-201836315/"]'));
  assert.equal(document.querySelector('script'), null);
});

test('missing dates and organizations are omitted instead of replaced with invented values', () => {
  const { document } = parseHTML(html);
  renderPortfolio(document, portfolio);
  const treasurer = document.querySelectorAll('#experience-list .background-entry')[1];
  assert.equal(treasurer.querySelector('h4').textContent, 'Student Organization Treasurer');
  assert.equal(treasurer.querySelector('.background-period'), null);
  assert.equal(treasurer.querySelector('.background-subtitle'), null);
});

test('background text is escaped and incomplete records are not published', () => {
  const { document } = parseHTML(html);
  renderPortfolio(document, { ...portfolio, about: {
    summary: '<img src=x onerror=alert(1)>',
    education: [{ institution: 'Missing program' }],
    experience: [{ title: '' }, { title: '<script>alert(1)</script>', organization: null, details: ['<b>text</b>'] }],
  } });
  assert.equal(document.querySelector('[data-about-summary]').textContent, '<img src=x onerror=alert(1)>');
  assert.equal(document.querySelector('[data-about-summary] img'), null);
  assert.equal(document.querySelectorAll('#education-list .background-entry').length, 0);
  assert.equal(document.querySelectorAll('#experience-list .background-entry').length, 1);
  assert.equal(document.querySelector('#experience-list script'), null);
});

test('clearing background removes old records and restores a valid hero About anchor', () => {
  const { document } = parseHTML(html);
  renderPortfolio(document, portfolio);
  renderPortfolio(document, { ...portfolio, about: null });
  assert.equal(document.querySelectorAll('#experience-list .background-entry').length, 0);
  assert.equal(document.querySelector('#profil').hidden, true);
  assert.equal(document.querySelector('[data-about-link]').getAttribute('href'), '#tentang');
  assert.equal(document.querySelector('[data-about-link]').hidden, false);
  renderPortfolio(document, { ...portfolio, about: null, profile: { ...portfolio.profile, bio: null } });
  assert.equal(document.querySelector('[data-about-link]').hidden, true);
});
