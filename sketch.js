var x;
var y;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = windowWidth / 2;
  y = windowHeight / 2;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50, 50, 52);
  stroke(255);
  strokeWeight(9);
  point(x, y);

  var r = floor(random(4));

  switch (r) {
    case 0:
      x++;
      break;
    case 1:
      x--;
      break;
    case 2:
      y++;
      break;
    default:
      y--;
      break;
  }
}
