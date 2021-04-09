let counter = 0;
let scrollInAction = false;
let sections;

(function () {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  // eslint-disable-next-line consistent-return
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
    // eslint-disable-next-line no-empty
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

  // Retrieve sections
  sections = document.getElementsByTagName('section');

  // Add event listener for wheel
  window.addEventListener('wheel', (event) => {
    const buttons = document.getElementsByClassName('round-button');
    if (scrollInAction) return;
    const delta = Math.sign(event.deltaY);
    if (delta === 1) {
      buttons[counter].classList.remove('onVisitSection');
      if (counter < sections.length - 1) counter++;
      sections[counter].scrollIntoView({ behavior: 'smooth', duration: '750' });
      buttons[counter].classList.add('onVisitSection');
    } else {
      buttons[counter].classList.remove('onVisitSection');
      if (counter > 0) counter--;
      buttons[counter].classList.add('onVisitSection');
      sections[counter].scrollIntoView({ behavior: 'smooth', duration: '750' });
    }
    scrollInAction = true;
    setTimeout(function () {
      scrollInAction = false;
    }, 750);
  });

  // Add event listener for arrow keys
  document.addEventListener('keydown', function (e) {
    if (scrollInAction) return;
    const buttons = document.getElementsByClassName('round-button');
    switch (e.code) {
      case 'ArrowDown':
        buttons[counter].classList.remove('onVisitSection');
        if (counter < sections.length - 1) counter++;
        buttons[counter].classList.add('onVisitSection');
        sections[counter].scrollIntoView({ behavior: 'smooth', duration: '750' });
        break;
      case 'ArrowUp':
        buttons[counter].classList.remove('onVisitSection');
        if (counter > 0) counter--;
        buttons[counter].classList.add('onVisitSection');
        sections[counter].scrollIntoView({ behavior: 'smooth', duration: '750' });
        break;
      default:
        break; // do not block other keys
    }
    scrollInAction = true;
    setTimeout(function () {
      scrollInAction = false;
    }, 750);
  });

  // call this to Enable
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }
})();

const heroBtnClicked = () => {
  if (scrollInAction) return;
  const buttons = document.getElementsByClassName('round-button');
  buttons[counter].classList.remove('onVisitSection');
  counter = 3;
  sections[counter].scrollIntoView({ behavior: 'smooth', duration: '750' });
  buttons[counter].classList.add('onVisitSection');
  scrollInAction = true;
  // eslint-disable-next-line func-names
  setTimeout(function () {
    scrollInAction = false;
  }, 750);
};

const menuBtnClicked = (menuID, sectionID) => {
  if (scrollInAction) return;
  const buttons = document.getElementsByClassName('round-button');
  buttons[counter].classList.remove('onVisitSection');
  document.getElementById(menuID).classList.add('onVisitSection');
  document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth', duration: '750' });
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].id === sectionID) {
      counter = i;
    }
  }
  scrollInAction = true;
  // eslint-disable-next-line func-names
  setTimeout(function () {
    scrollInAction = false;
  }, 750);
};

module.exports.heroBtnClicked = heroBtnClicked;
module.exports.menuBtnClicked = menuBtnClicked;
