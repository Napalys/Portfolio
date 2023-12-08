import Point from './Point';

const getDistance = (p1, p2) => (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;

export default function animateIndexPage() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  const target = { x: width / 2, y: height / 2 };
  const largeHeader = document.getElementById('hero');
  largeHeader.style.height = `${height}px`;
  const canvas = document.getElementById('demo-canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  let animateHeader = true;
  const points = [];

  function iniPoints() {
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const point = new Point(x, y, width, height);
        points.push(point);
      }
    }
    points.forEach((point) => {
      point.findClosest(points);
      point.assignCircle();
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
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeader.style.height = `${height}px`;
    canvas.width = width;
    canvas.height = height;
  }
  function addListeners() {
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', mouseMove);
    }
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);
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
        const distance = Math.abs(getDistance(target, point));
        point.updateActiveStatus(distance);
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
