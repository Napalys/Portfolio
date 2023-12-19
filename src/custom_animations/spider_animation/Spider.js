import Point from './Point';

const padding = 10;

export default function animateIndexPage() {
  let points = [];
  let width = window.innerWidth;
  let height = window.innerHeight;
  const target = { x: width / 2, y: height / 2 };
  const canvas = document.getElementById('demo-canvas');
  const ctx = canvas.getContext('2d');
  let animateHeader = true;

  function iniPoints() {
    points = [];
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const point = new Point(x, y, width, height);
        point.assignCircle();
        points.push(point);
      }
    }
    Point.findClosest(points);
    points.forEach((point) => {
      point.shift();
    });
  }

  function mouseMove(e) {
    target.x = e.pageX;
    target.y = e.pageY;
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
    console.log("debouncedResize : ")
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 250); // Adjust delay as needed
    resize();
    iniPoints();
  }

  function addListeners() {
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', debouncedResize);
    window.addEventListener('orientationchange', debouncedResize);
    window.addEventListener('fullscreenchange', debouncedResize);
  }
  function drawLines(p) {
    if (!p.active) return;
    ctx.beginPath();
    p.closest.forEach((closestPoint) => {
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(closestPoint.x, closestPoint.y);
    });
    ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
    ctx.stroke();
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

  resize();
  iniPoints();
  animate();
  addListeners();
}
