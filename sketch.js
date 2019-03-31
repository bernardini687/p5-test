var x, y, f1, f2, f3;

var Food = function(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
};

Food.prototype.display = function() {
  stroke(0, 255, 0);
  strokeWeight(9);
  point(this.xPos, this.yPos);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
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
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50, 50, 52);
  stroke(255);
  strokeWeight(9);
  point(x, y);

  f1.display();
  f2.display();
  f3.display();

  var r = floor(random(4));

  switch (r) {
    case 0:
      x = x + 2;
      break;
    case 1:
      x = x - 2;
      break;
    case 2:
      y = y + 2;
      break;
    default:
      y = y - 2;
      break;
  }
}

