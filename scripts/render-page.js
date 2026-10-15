import { parseHTML } from 'linkedom';
import { renderPortfolio, safeHref } from '../src/ui.js';

function setMeta(document, attributes, content) {
  const selector = Object.entries(attributes).map(([key, value]) => `[${key}="${value}"]`).join('');
  let meta = document.head.querySelector(`meta${selector}`);
  if (!meta) {
    meta = document.createElement('meta');
    for (const [key, value] of Object.entries(attributes)) meta.setAttribute(key, value);
    document.head.append(meta);
  }
  meta.setAttribute('content', content);
}

/** The same renderer powers tests, development HTML and the static production HTML. */
export function renderPage(html, data) {
  const { document } = parseHTML(html);
  renderPortfolio(document, data);
  const { profile, metadata = {} } = data;
  const title = metadata.title?.trim() || `${profile.displayName} — Portfolio`;
  const description = metadata.description?.trim() || `${profile.displayName}. ${profile.bio || 'Selected work and experiments.'}`;
  document.title = title;
  setMeta(document, { name: 'description' }, description);
  setMeta(document, { property: 'og:title' }, title);
  setMeta(document, { property: 'og:description' }, description);
  setMeta(document, { property: 'og:type' }, 'website');
  setMeta(document, { property: 'og:locale' }, 'en_US');

  // No canonical domain is guessed before the owner supplies one.
  document.head.querySelectorAll('link[rel="canonical"], meta[property="og:url"]').forEach((element) => element.remove());
  const siteUrl = safeHref(metadata.siteUrl);
  if (siteUrl?.startsWith('https://')) {
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', siteUrl);
    document.head.append(canonical);
    setMeta(document, { property: 'og:url' }, siteUrl);
  }
  // This template is an authoring aid; visitors receive the finished cards.
  document.querySelector('#project-template').remove();
  return document.toString();
}
