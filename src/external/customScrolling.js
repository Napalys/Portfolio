(function () {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  let supportsPassive = false;
  try {
    window.addEventListener(
      'test',
      null,
      Object.defineProperty({}, 'passive', {
        get() {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  const wheelOpt = supportsPassive ? { passive: false } : false;
  const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  // call this to Disable
  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }
  disableScroll();

  ///Retreive sections
  let sections = document.getElementsByTagName('section');
  let counter = 0;
  ///Add event listener for wheel
  window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    console.info(delta);
    if(delta == 1) {
      if (counter < sections.length-1) counter++;
      sections[counter].scrollIntoView({ behavior: 'smooth' });
    }
    else{
      if (counter > 0) counter--;
      console.log(counter);
      sections[counter].scrollIntoView({ behavior: 'smooth' });
    }
  });

  ///Add event listener for arrow keys
  document.addEventListener('keydown', function (e) {
    switch (e.code) {
      case 'ArrowUp':
        if (counter < sections.length-1) counter++;
        console.log(sections.length + ' lenght');
        console.log(counter);
        sections[counter].scrollIntoView({ behavior: 'smooth' });
        break;
      case 'ArrowDown':
        if (counter > 0) counter--;
        console.log(counter);
        sections[counter].scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break; // do not block other keys
    }
  });

  // call this to Enable
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }
})();
