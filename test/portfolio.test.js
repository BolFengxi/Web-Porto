import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { parseHTML } from 'linkedom';
import { portfolio } from '../src/data/portfolio.js';
import { renderPortfolio, safeHref } from '../src/ui.js';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
function render(overrides = {}) {
  const { document } = parseHTML(html);
  renderPortfolio(document, { ...structuredClone(portfolio), ...overrides });
  return document;
}

test('missing optional content hides sections, navigation, and the hero CTA together', () => {
  const document = render({ projects: [], contacts: [], profile: { ...portfolio.profile, bio: null } });
  ['#karya', '#terhubung', '#tentang', '[data-project-link]', '[data-contact-link]', '[data-about-link]'].forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => assert.equal(element.hidden, true, selector));
  });
  assert.equal(document.querySelector('[data-resume]').hasAttribute('href'), false);
});

test('current content links to the actual repository without inventing a demo or CV', () => {
  const document = render();
  assert.equal(document.querySelectorAll('.project-card').length, portfolio.projects.length);
  assert.equal(document.querySelectorAll('.project-actions a').length, portfolio.projects.length);
  assert.equal(document.querySelector('.project-actions a').getAttribute('href'), portfolio.projects[0].repositoryUrl);
  assert.equal(document.querySelector('#tentang').hidden, false);
  assert.equal(document.querySelector('[data-bio]').textContent, 'Undergraduate Computer Science student at University of Indonesia');
  assert.equal(document.querySelector('[data-resume]').hidden, true);
  assert.equal(document.querySelector('#contact-list a').getAttribute('href'), portfolio.contacts[0].href);
});

test('unsafe and missing URLs do not become clickable actions', () => {
  for (const value of [null, '', '#', 'javascript:alert(1)', 'data:text/html,hi', '//evil.test', 'https://user:pass@evil.test']) {
    assert.equal(safeHref(value), null, String(value));
  }
  assert.equal(safeHref('/cv.pdf', { allowLocal: true }), '/cv.pdf');
  assert.equal(safeHref('//evil.test/cv.pdf', { allowLocal: true }), null);
  assert.equal(safeHref('mailto:hello@example.org'), 'mailto:hello@example.org');
  const project = { ...portfolio.projects[0], repositoryUrl: 'javascript:alert(1)', demoUrl: '#' };
  const document = render({ projects: [project], contacts: [{ label: 'Bad', href: 'data:text/html,hi' }] });
  assert.equal(document.querySelectorAll('.project-actions a').length, 0);
  assert.equal(document.querySelector('#terhubung').hidden, true);
});

test('content stays plain text, duplicate IDs and incomplete projects are omitted', () => {
  const project = { ...portfolio.projects[0], title: '<img src=x onerror=alert(1)>' };
  const document = render({ projects: [project, project, { id: 'missing', title: 'No summary' }] });
  assert.equal(document.querySelectorAll('.project-card').length, 1);
  assert.equal(document.querySelector('.project-title').textContent, project.title);
  assert.equal(document.querySelectorAll('.project-title img').length, 0);
});

test('rerendering removes stale content and keeps navigation in sync', () => {
  const document = render();
  renderPortfolio(document, { ...portfolio, projects: [], contacts: [], profile: { ...portfolio.profile, bio: 'Bio supplied by the owner.' } });
  assert.equal(document.querySelectorAll('.project-card').length, 0);
  assert.equal(document.querySelectorAll('#contact-list a').length, 0);
  assert.equal(document.querySelector('#tentang').hidden, false);
  assert.equal(document.querySelector('[data-about-link]').hidden, false);
  assert.equal(document.querySelector('[data-bio]').textContent, 'Bio supplied by the owner.');
});

test('every visible internal link points to an existing visible section', () => {
  const document = render();
  for (const link of document.querySelectorAll('a[href^="#"]')) {
    if (link.hidden || link.closest('[hidden]')) continue;
    const target = document.getElementById(link.getAttribute('href').slice(1));
    assert.ok(target, link.outerHTML);
    assert.equal(target.hidden, false, link.outerHTML);
  }
});
