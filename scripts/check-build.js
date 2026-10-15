import assert from 'node:assert/strict';
import { access, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';
import { portfolio } from '../src/data/portfolio.js';

const dist = new URL('../dist/', import.meta.url);
const distPath = path.resolve(fileURLToPath(dist));
const { document } = parseHTML(await readFile(new URL('index.html', dist), 'utf8'));
const visible = (element) => !element.hidden && !element.closest('[hidden]');

assert.equal(document.querySelector('h1').textContent, portfolio.profile.displayName);
const expectedProjects = portfolio.projects.filter((project) => project.id && project.title?.trim() && project.summary?.trim());
assert.equal(document.querySelectorAll('.project-card').length, new Set(expectedProjects.map((project) => project.id)).size);
assert.equal(document.querySelectorAll('script').length, 0, 'Production page must work without browser JavaScript');
assert.ok(document.head.querySelector('link[rel="stylesheet"]'), 'Styles must load without JavaScript');

for (const link of document.querySelectorAll('a[href^="#"]')) {
  if (!visible(link)) continue;
  const target = document.getElementById(link.getAttribute('href').slice(1));
  assert.ok(target && visible(target), `Missing or hidden anchor target: ${link.getAttribute('href')}`);
}
for (const element of document.querySelectorAll('[src], link[href], a[href]')) {
  const href = element.getAttribute('src') ?? element.getAttribute('href');
  if (!href || href.startsWith('#') || /^[a-z]+:|^\/\//i.test(href)) continue;
  const relative = decodeURIComponent(href.split(/[?#]/)[0]).replace(/^\/+/, '');
  const resolved = path.resolve(distPath, relative);
  assert.ok(resolved.startsWith(distPath + path.sep), 'Asset must stay inside dist');
  assert.ok((await stat(resolved)).isFile(), `Missing production asset: ${href}`);
}
await access(new URL('favicon.svg', dist));
console.log('Static build verified: profile, project cards, anchors and local assets; no browser JavaScript.');
