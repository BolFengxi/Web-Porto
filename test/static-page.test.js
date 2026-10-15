import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { parseHTML } from 'linkedom';
import { portfolio } from '../src/data/portfolio.js';
import { renderPage } from '../scripts/render-page.js';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const page = (data) => parseHTML(renderPage(html, data)).document;

test('HTML already includes actual project and contact links without executing browser code', () => {
  const document = page(portfolio);
  assert.equal(document.querySelector('.project-title').textContent, 'Sporta Kuler');
  assert.equal(document.querySelector('#karya').hidden, false);
  assert.equal(document.querySelector('#contact-list a').getAttribute('href'), portfolio.contacts[0].href);
  assert.equal(document.querySelector('#project-template'), null);
  assert.equal(document.querySelector('script'), null);
  assert.ok(document.querySelector('link[rel="stylesheet"]'));
});

test('metadata follows the profile and escapes text instead of injecting HTML', () => {
  const data = structuredClone(portfolio);
  data.profile.displayName = 'Iqbal & <friends>';
  data.profile.bio = 'An introduction with "quotes" & symbols.';
  const document = page(data);
  assert.equal(document.title, `${data.profile.displayName} — Portfolio`);
  assert.equal(document.querySelector('meta[property="og:title"]').getAttribute('content'), document.title);
  assert.equal(document.querySelector('meta[name="description"]').getAttribute('content'), `${data.profile.displayName}. ${data.profile.bio}`);
  assert.equal(document.querySelector('friends'), null);
});

test('canonical and share URLs appear only when a valid HTTPS site URL is supplied', () => {
  for (const siteUrl of [null, '', '#', 'javascript:alert(1)', 'mailto:hello@example.org']) {
    const document = page({ ...portfolio, metadata: { siteUrl } });
    assert.equal(document.querySelector('link[rel="canonical"]'), null);
    assert.equal(document.querySelector('meta[property="og:url"]'), null);
  }
  const document = page({ ...portfolio, metadata: { siteUrl: 'https://portfolio.example.org/', title: 'Custom title', description: 'Custom description' } });
  assert.equal(document.querySelector('link[rel="canonical"]').getAttribute('href'), 'https://portfolio.example.org/');
  assert.equal(document.querySelector('meta[property="og:url"]').getAttribute('content'), 'https://portfolio.example.org/');
  assert.equal(document.title, 'Custom title');
});

test('empty content stays hidden in the delivered HTML and leaves no dead navigation', () => {
  const document = page({ ...portfolio, projects: [], contacts: [], profile: { ...portfolio.profile, bio: null } });
  for (const selector of ['#karya', '#terhubung', '#tentang', '[data-project-link]', '[data-contact-link]']) {
    document.querySelectorAll(selector).forEach((element) => assert.equal(element.hidden, true));
  }
  assert.equal(document.querySelectorAll('.project-card').length, 0);
});
