import Point from './Point';

const padding = 10;

export default function animateIndexPage() {
  const points = [];
  let width = window.innerWidth;
  let height = window.innerHeight;
  const target = { x: width / 2, y: height / 2 };
  const canvas = document.getElementById('demo-canvas');
  // eslint-disable-next-line no-use-before-define
  resize();
  const ctx = canvas.getContext('2d');
  let animateHeader = true;

  function iniPoints() {
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const point = new Point(x, y, width, height);
        point.assignCircle();
        points.push(point);
      }
    }
    points.forEach((point) => {
      point.findClosest(points);
    });
  }

  function mouseMove(e) {
    let posX = 0;
    let posY = 0;
    if (e.pageX || e.pageY) {
      posX = e.pageX;
      posY = e.pageY;
    } else if (e.clientX || e.clientY) {
      posX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    target.x = posX;
    target.y = posY;
  }

  function scrollCheck() {
    animateHeader = document.body.scrollTop <= height;
  }

  function resize() {
    width = canvas.offsetWidth - padding;
    height = canvas.offsetHeight - padding;
    canvas.width = width;
    canvas.height = height;
  }

  let resizeTimer;

  function debouncedResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 250); // Adjust delay as needed
  }

  function addListeners() {
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', debouncedResize);
    window.addEventListener('orientationchange', debouncedResize);
    window.addEventListener('fullscreenchange', debouncedResize);
    window.addEventListener('deviceorientation', debouncedResize);
  }
  function drawLines(p) {
    if (!p.active) return;
    p.closest.forEach((closestPoint) => {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(closestPoint.x, closestPoint.y);
      ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
      ctx.stroke();
    });
  }

  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      points.forEach((point) => {
        point.updateActiveStatus(target);
        drawLines(point);
        point.circle.draw(ctx);
      });
    }
    requestAnimationFrame(animate);
  }
  function initAnimation() {
    animate();
    points.forEach((point) => {
      point.shift();
    });
  }

  iniPoints();
  initAnimation();
  addListeners();
}
