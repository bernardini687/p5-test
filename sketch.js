let x, y, f1, f2, f3, w1;

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
  let r = random([0, 1, 2, 3]);

  switch (r) {
    case 0:
      this.wX = this.wX + random(3);
      break;
    case 1:
      this.wX = this.wX - random(3);
      break;
    case 2:
      this.wY = this.wY + random(3);
      break;
    default:
      this.wY = this.wY - random(3);
      break;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;

  const vw = windowWidth / 4;
  const vh = windowHeight / 4;

  f1 = new Food(getRandom(x - vw, x + vw), getRandom(y - vh, y + vh));
  f2 = new Food(getRandom(x - vw, x + vw), getRandom(y - vh, y + vh));
  f3 = new Food(getRandom(x - vw, x + vw), getRandom(y - vh, y + vh));

  w1 = new Walker(x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50, 50, 52);

  f1.display();
  f2.display();
  f3.display();

  w1.display();
  w1.walk();
}
