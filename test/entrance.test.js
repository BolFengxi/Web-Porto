import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { parseHTML } from 'linkedom';
import { initEntrance } from '../src/entrance.js';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const key = 'web-porto:entrance-opened';

function browser({ visited = false, hash = '', reduced = false, blockedStorage = false, supported = true } = {}) {
  const { document, window: domWindow } = parseHTML(html);
  const dialog = document.querySelector('#entrance');
  const main = document.querySelector('#main');
  const open = document.querySelector('[data-entrance-open]');
  const skip = document.querySelector('[data-entrance-skip]');
  const replay = document.querySelector('[data-entrance-replay]');
  const storage = new Map(visited ? [[key, '1']] : []);
  const timers = new Map();
  let id = 0;
  let focused;
  let animations = 0;
  for (const element of [main, open, replay]) element.focus = () => { focused = element; };
  document.querySelector('.page-sheet').animate = () => { animations += 1; };
  Object.defineProperty(dialog, 'open', { get: () => dialog.hasAttribute('open') });
  if (supported) {
    dialog.showModal = () => dialog.setAttribute('open', '');
    dialog.close = () => {
      dialog.removeAttribute('open');
      dialog.dispatchEvent(new domWindow.Event('close'));
    };
  }
  const window = {
    location: { hash },
    matchMedia: () => ({ matches: reduced }),
    sessionStorage: {
      getItem(name) { if (blockedStorage) throw Error('Storage denied'); return storage.get(name); },
      setItem(name, value) { if (blockedStorage) throw Error('Storage denied'); storage.set(name, value); },
    },
    setTimeout(callback) { timers.set(++id, callback); return id; },
    clearTimeout(timer) { timers.delete(timer); },
  };
  const click = (element) => element.dispatchEvent(new domWindow.Event('click'));
  initEntrance(document, window);
  return { document, dialog, main, open, skip, replay, storage, timers, click,
    focus: () => focused, animations: () => animations,
    escape: () => dialog.dispatchEvent(new domWindow.Event('cancel', { cancelable: true })),
    finish: () => { for (const callback of [...timers.values()]) callback(); },
  };
}

test('first visit opens an accessible cover; entering finishes and focuses static content', () => {
  const page = browser();
  assert.equal(page.dialog.open, true);
  assert.equal(page.focus(), page.open);
  assert.ok(page.document.getElementById(page.dialog.getAttribute('aria-labelledby')));
  page.click(page.open);
  page.click(page.open);
  assert.equal(page.timers.size, 1, 'Repeated entry clicks must not restart the transition');
  page.finish();
  assert.equal(page.dialog.open, false);
  assert.equal(page.focus(), page.main);
  assert.equal(page.storage.get(key), '1');
  assert.equal(page.animations(), 1);
  assert.equal(page.timers.size, 0);
});

test('skip and Escape close immediately, including during the opening transition', () => {
  for (const action of ['skip', 'escape']) {
    const page = browser();
    page.click(page.open);
    if (action === 'skip') page.click(page.skip);
    else page.escape();
    assert.equal(page.dialog.open, false);
    assert.equal(page.timers.size, 0);
    assert.equal(page.animations(), 0);
    assert.equal(page.focus(), page.main);
  }
});

test('reduced motion enters immediately without an animation or delay', () => {
  const page = browser({ reduced: true });
  page.click(page.open);
  assert.equal(page.dialog.open, false);
  assert.equal(page.timers.size, 0);
  assert.equal(page.animations(), 0);
  assert.equal(page.focus(), page.main);
});

test('repeat visits and direct section links bypass the cover but keep replay available', () => {
  for (const options of [{ visited: true }, { hash: '#profil' }]) {
    const page = browser(options);
    assert.equal(page.dialog.open, false);
    assert.equal(page.focus(), undefined, 'Do not steal focus from a deep link');
    assert.equal(page.replay.hidden, false);
    page.click(page.replay);
    assert.equal(page.dialog.open, true);
    page.escape();
    assert.equal(page.focus(), page.replay);
  }
});

test('denied session storage still allows entry and subsequent replay', () => {
  const page = browser({ blockedStorage: true });
  page.click(page.skip);
  assert.equal(page.dialog.open, false);
  page.click(page.replay);
  assert.equal(page.dialog.open, true);
  page.escape();
  assert.equal(page.focus(), page.replay);
});

test('unsupported dialog leaves content unobstructed and replay hidden', () => {
  const page = browser({ supported: false });
  assert.equal(page.dialog.open, false);
  assert.equal(page.replay.hidden, true);
  assert.ok(page.document.querySelector('#main'));
});
