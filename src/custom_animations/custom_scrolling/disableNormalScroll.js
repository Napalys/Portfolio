

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  // left: 37, up: 38, right: 39, down: 40, spacer: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
  return true;
}

function disableScroll(supportsPassive) {
  const wheelOpt = supportsPassive ? { passive: false } : false;
  const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  // window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  window.addEventListener('wheel', preventDefault, wheelOpt);
}

export default function disableOriginalScrolling() {
  // modern Chrome requires { passive: false } when adding event
  let supportsPassive = false;
  try {
    window.addEventListener(
      'test',
      null,
      Object.defineProperty({}, 'passive', {
        // eslint-disable-next-line getter-return
        get() {
          supportsPassive = true;
        },
      })
    );
    // eslint-disable-next-line no-empty
  } catch (e) {}
  disableScroll(supportsPassive);
}
