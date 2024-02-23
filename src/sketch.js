let planet;
let rocket;

function preload() {
  planet = loadImage("assets/planet.png");
  rocket = loadImage("assets/rocket.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  push();
  translate(200,400);
  drawBackground(200,400)
  scale(0.25)
  drawRocket(-175,-500);
  drawPlanet(-100,-900)
  pop();
}

function drawBackground() {
  background(10, 30, 50); // Dark blue background
  fill(255)
  circle()
  }
function drawPlanet(x, y) {
  push();
  translate(x, y);
  scale(0.75);
  image(planet, -400,-400);
  pop();
}

function drawRocket(x, y) {
  push();
  translate(x, y);
  scale(0.25);
  image(rocket, 0, 0);
  pop();
}
