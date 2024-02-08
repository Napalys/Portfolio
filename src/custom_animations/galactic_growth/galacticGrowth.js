import '../../style/components/_galacticGrowth.scss';

const height = window.innerHeight * 3;
const width = window.innerWidth;
const body = document.body;

// Generation of stars
(function(n) {
  for (let i = 0; i < n; i++) {
    const div = document.createElement('div');
    div.className = i % 20 === 0 ? 'star star--big' : i % 9 === 0 ? 'star star--medium' : 'star';
    div.setAttribute('style', 'top:' + Math.round(Math.random() * height) + 'px;left:' + Math.round(Math.random() * width)
      + 'px;animation-duration:' + (Math.round(Math.random() * 3000) + 3000) + 'ms;animation-delay:' + Math.round(Math.random() * 3000) + 'ms;');
    body.appendChild(div);
  }
})(300);