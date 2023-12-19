import disableOriginalScrolling from './disableNormalScroll';

let counter = 0;
let sections;
let scrollInAction = false;

export function enableCustomScrolling() {
  disableOriginalScrolling();
  sections = document.getElementsByTagName('section');
  function performScroll(delta) {
    const buttons = document.getElementsByClassName('round-button');
    buttons[counter].classList.remove('onVisitSection');
    counter += delta;
    counter = Math.max(counter, 0);
    counter = Math.min(counter, sections.length - 1);
    buttons[counter].classList.add('onVisitSection');
    sections[counter].scrollIntoView({ behavior: 'instant' }); // switch to smooth for animation
    scrollInAction = true;
    setTimeout(() => {
      scrollInAction = false;
    }, 750);
  }
  document.addEventListener('wheel', (event) => {
    event.preventDefault();
    if (scrollInAction) return;
    console.log(event.deltaY); // Check the deltaY value
    const delta = Math.sign(event.deltaY);
    performScroll(delta);
  });
  document.addEventListener('keydown', (e) => {
    if (scrollInAction) return;
    const deltaValues = {
      ArrowDown: 1,
      ArrowUp: -1,
    };
    const delta = deltaValues[e.code] || 0;
    performScroll(delta);
  });
}

export const heroBtnClicked = () => {
  if (scrollInAction) return;
  const buttons = document.getElementsByClassName('round-button');
  if (buttons.length !== 0) {
    buttons[counter].classList.remove('onVisitSection');
    counter = 3;
    sections[counter].scrollIntoView({ behavior: 'smooth' });
    buttons[counter].classList.add('onVisitSection');
  } else {
    const sections1 = document.getElementsByTagName('section');
    sections1[3].scrollIntoView({ behavior: 'smooth' });
  }
  scrollInAction = true;
  setTimeout(() => {
    scrollInAction = false;
  }, 750);
};

export const menuBtnClicked = (menuID, sectionID) => {
  if (scrollInAction) return;
  const buttons = document.getElementsByClassName('round-button');
  buttons[counter].classList.remove('onVisitSection');
  document.getElementById(menuID).classList.add('onVisitSection');
  document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
  const sectionsArray = Array.from(sections);
  counter = sectionsArray.findIndex((section) => section.id === sectionID);
  scrollInAction = true;
  setTimeout(() => {
    scrollInAction = false;
  }, 750);
};
