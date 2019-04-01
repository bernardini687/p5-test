let pos, prev, x, y, f1, f2, f3, w1;

const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
}

class Food {
  constructor(fX, fY) {
    this.fX = fX;
    this.fY = fY;
  }
}

class Walker {
  constructor(wX, wY) {
    this.wX = wX;
    this.wY = wY;
  }
}

Food.prototype.display = function() {
  noFill();
  stroke(0, 255, 0);
  ellipse(this.fX, this.fY, 9, 9);
}

Walker.prototype.display = function() {
  fill(255);
  stroke(255);
  ellipse(this.wX, this.wY, 9, 9);
}

Walker.prototype.walk = function() {
  let step = p5.Vector.random2D();
  let r = random(1);

  if (r < 0.85) {
    step.mult(0);
  } else if (r < 0.98) {
    // step.setMag(9);
    step.mult(random(2, 6));
  } else {
    step.mult(random(20, 60));
  }

  if (pos !== prev) {
    pos.add(step);
  } else {
    prev.set(pos);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;
  pos = createVector(windowWidth / 2, windowHeight / 2);
  prev = pos.copy();

  const vw = windowWidth / 4;
  const vh = windowHeight / 4;

  f1 = new Food(getRandom(x - vw, x + vw), getRandom(y - vh, y + vh));
  f2 = new Food(getRandom(x - vw, x + vw), getRandom(y - vh, y + vh));
  f3 = new Food(getRandom(x - vw, x + vw), getRandom(y - vh, y + vh));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50, 50, 52);

  f1.display();
  f2.display();
  f3.display();

  w1 = new Walker(pos.x, pos.y);
  w1.display();
  w1.walk();
}
