// The portfolio is already in the HTML. This optional cover only enhances entry.
const sessionKey = 'web-porto:entrance-opened';

export function initEntrance(document, window) {
  const dialog = document.querySelector('#entrance');
  const openButton = dialog?.querySelector('[data-entrance-open]');
  const skipButton = dialog?.querySelector('[data-entrance-skip]');
  const replayButton = document.querySelector('[data-entrance-replay]');
  const main = document.querySelector('#main');
  if (!dialog?.showModal || !openButton || !skipButton || !replayButton || !main) return;

  let returnFocus = main;
  let leaving = false;
  let timer;
  let revealPage = false;
  const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

  function show(fromReplay = false) {
    if (dialog.open) return;
    returnFocus = fromReplay ? replayButton : main;
    try {
      dialog.showModal();
    } catch {
      // A browser unable to show the cover must leave the portfolio usable.
      return;
    }
    openButton.focus();
  }

  function dismiss(animated = false) {
    if (!dialog.open) return;
    if (leaving && animated) return;
    window.clearTimeout(timer);
    revealPage = animated && !reducedMotion();
    if (!revealPage) {
      dialog.close();
      return;
    }
    leaving = true;
    dialog.classList.add('is-leaving');
    // A timeout also completes entry if CSS animations are unavailable.
    timer = window.setTimeout(() => dialog.close(), 480);
  }

  dialog.addEventListener('close', () => {
    window.clearTimeout(timer);
    leaving = false;
    dialog.classList.remove('is-leaving');
    try { window.sessionStorage.setItem(sessionKey, '1'); } catch { /* Storage is optional. */ }
    returnFocus.focus({ preventScroll: true });
    if (revealPage && !reducedMotion()) {
      document.querySelector('.page-sheet')?.animate?.([
        { opacity: 0.35, transform: 'translateY(12px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 380, easing: 'ease-out' });
    }
    revealPage = false;
  });
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    dismiss();
  });
  openButton.addEventListener('click', () => dismiss(true));
  skipButton.addEventListener('click', () => dismiss());
  replayButton.addEventListener('click', () => show(true));
  replayButton.hidden = false;

  let alreadyOpened = false;
  try { alreadyOpened = window.sessionStorage.getItem(sessionKey) === '1'; } catch { /* Private modes may deny storage. */ }
  if (!alreadyOpened && !window.location.hash) show();
}

if (typeof document !== 'undefined' && typeof window !== 'undefined') initEntrance(document, window);
