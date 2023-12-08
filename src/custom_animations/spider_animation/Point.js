import { gsap } from 'gsap';
import Circle from './Circle';

const getDistance = (p1, p2) => (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
export default class Point {
  constructor(x, y, width, height) {
    this.x = x + (Math.random() * width) / 20;
    this.originX = this.x;
    this.y = y + (Math.random() * height) / 20;
    this.originY = this.y;
    this.closest = [];
    this.circle = null;
  }

  // eslint-disable-next-line class-methods-use-this
  findClosest(points) {
    /* eslint-disable no-plusplus */
    for (let i = 0; i < points.length; i++) {
      const closest = [];
      const p1 = points[i];
      for (let j = 0; j < points.length; j++) {
        const p2 = points[j];
        if (p1 !== p2) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (let h = 0; h < 5; h++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[h])) {
                closest[h] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }
  }

  updateActiveStatus(targetDistance) {
    const thresholds = [
      { limit: 4000, active: 0.3, circleActive: 0.6 },
      { limit: 20000, active: 0.1, circleActive: 0.3 },
      { limit: 40000, active: 0.02, circleActive: 0.1 },
    ];

    // Find the first threshold that matches the target distance
    const threshold = thresholds.find((thresh) => targetDistance < thresh.limit);

    if (threshold) {
      this.active = threshold.active;
      this.circle.active = threshold.circleActive;
    } else {
      this.active = 0;
      this.circle.active = 0;
    }
  }

  assignCircle() {
    this.circle = new Circle(this, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
  }

  shift() {
    gsap.to(this, {
      duration: 1 + Math.random(),
      x: this.originX - 50 + Math.random() * 100,
      y: this.originY - 50 + Math.random() * 100,
      ease: 'circ.inOut',
      onComplete: () => {
        this.shift();
      },
    });
  }
}
