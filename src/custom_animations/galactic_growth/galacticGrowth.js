import '../../style/components/_galacticGrowth.scss';

const height = window.innerHeight * 3;
const width = window.innerWidth;
const { body } = document;

// Generation of comets
((n) => {
  const leftArr = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 60, 65, 70, 75, 80];
  const delayArr = Array.from({ length: 25 }, (_, i) => (i + 1) * 2);

  for (let i = 0; i < n; i += 1) {
    const leftIndex = Math.floor(Math.random() * leftArr.length);
    const left = leftArr[leftIndex] + parseFloat(Math.random().toFixed(2));
    const delayIndex = Math.floor(Math.random() * delayArr.length);
    const delay = delayArr[delayIndex] * 1000 + Math.round(Math.random() * 700);
    const div = document.createElement('div');
    div.className = 'star comet';
    div.style.left = `${left}%`;
    div.style.animationDelay = `${delay}ms`;
    body.appendChild(div);
  }
})(25);

const getStarSize = (index) => {
  switch (true) {
    case index % 20 === 0:
      return 'star star--big';
    case index % 9 === 0:
      return 'star star--medium';
    default:
      return 'star';
  }
};

// Generation of stars
(() => {
  const numStars = 300;

  for (let i = 0; i < numStars; i += 1) {
    const div = document.createElement('div');
    const classes = getStarSize(i);
    const style = `
      top: ${Math.round(Math.random() * height)}px;
      left: ${Math.round(Math.random() * width)}px;
      animation-duration: ${Math.round(Math.random() * 3000) + 3000}ms;
      animation-delay: ${Math.round(Math.random() * 3000)}ms;
    `;
    div.className = classes;
    div.setAttribute('style', style);
    document.body.appendChild(div);
  }
})();
