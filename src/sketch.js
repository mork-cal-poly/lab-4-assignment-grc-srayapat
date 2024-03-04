let planet;
let rocket;
let rocketY = -500; // Start at the bottom of the screen
let rocketSpeed = 2;
let planetAngle = 0;
let RocketMoving = false;
let RtoP = false;

function preload() {
  planet = loadImage("assets/planet.png");
  rocket = loadImage("assets/rocket.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (RocketMoving) {
    rocketY -= rocketSpeed;
    
    if (rocketY <= -900) {
      RtoP = true;
    }
  }
  
  if (RtoP) {
    planetAngle += 0.01;
  }
  
  push();
  translate(200, 400);
  drawBackground();
  scale(0.25);
  drawRocket(-175, rocketY);
  drawPlanet(-100, -900);
  pop();

  //HIDDEN SNORLAX
  drawSnorlax(350,100,0,.3)
}

function drawBackground() {
  background(10, 30, 50); // Dark blue background
}

function drawPlanet(x, y) {
  push();
  translate(x, y);
  rotate(planetAngle);
  scale(0.75);
  image(planet, -400, -400);
  pop();
}

function drawRocket(x, y) {
  push();
  translate(x, y);
  scale(0.25);
  image(rocket, 0, 0);
  pop();
}
