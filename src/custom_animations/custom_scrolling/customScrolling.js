import disableOriginalScrolling from './disableNormalScroll';

let counter = 0;
let sections;
let scrollInAction = false;
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
const scrollOptions = isFirefox ? { behavior: 'instant' } : { behavior: 'smooth' };

export function enableCustomScrolling() {
  disableOriginalScrolling();
  sections = document.getElementsByTagName('section');
  function performScroll(delta) {
    if (scrollInAction) return;
    const buttons = document.getElementsByClassName('round-button');
    buttons[counter].classList.remove('onVisitSection');
    counter += delta;
    counter = Math.max(counter, 0);
    counter = Math.min(counter, sections.length - 1);
    buttons[counter].classList.add('onVisitSection');
    sections[counter].scrollIntoView(scrollOptions);
    scrollInAction = true;
    setTimeout(() => {
      scrollInAction = false;
    }, 750);
  }
  document.addEventListener('wheel', (event) => {
    event.preventDefault();
    if (scrollInAction) return;
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
    sections[counter].scrollIntoView(scrollOptions);
    buttons[counter].classList.add('onVisitSection');
  } else {
    const sections1 = document.getElementsByTagName('section');
    sections1[3].scrollIntoView(scrollOptions);
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
  document.getElementById(sectionID).scrollIntoView(scrollOptions);
  const sectionsArray = Array.from(sections);
  counter = sectionsArray.findIndex((section) => section.id === sectionID);
  scrollInAction = true;
  setTimeout(() => {
    scrollInAction = false;
  }, 750);
};

export function resetToBeginning() {
  if (scrollInAction) return;
  const buttons = document.getElementsByClassName('round-button');
  buttons[counter].classList.remove('onVisitSection');
  counter = 0;
  buttons[counter].classList.add('onVisitSection');
  sections[counter].scrollIntoView(scrollOptions);
  scrollInAction = true;
  setTimeout(() => {
    scrollInAction = false;
  }, 750);
}
