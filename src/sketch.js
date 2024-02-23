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

  //HIDDEN SNORLAX
  drawSnorlax(350,100,0,.3)
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

function drawSnorlax(snorlaxX,snorlaxY,snorlaxR,snorlaxS){  
  //SNORLAX BRO
  push();
  translate(snorlaxX,snorlaxY);  
  rotate(snorlaxR);
  scale(snorlaxS);

  //ARMS
  beginShape();
  fill(41,115,142);   //Dark Blue
    curveVertex(70,-100);
    curveVertex(70,-100);
    curveVertex(100,-90);
    curveVertex(130,-80);
    curveVertex(150,-90);
    curveVertex(145,-110);

    curveVertex(100,-150);
    curveVertex(60,-170);
    curveVertex(0,-180);
    curveVertex(-60,-170);
    curveVertex(-100,-150);

    curveVertex(-145,-110);
    curveVertex(-150,-90);
    curveVertex(-130,-80);
    curveVertex(-100,-90);
    curveVertex(-70,-100);
  endShape();
  
      //ARM CLAWS
        //LEFT CLAW
      beginShape();
      fill(255);   //White
        curveVertex(-128,-85);
        curveVertex(-128,-85);
        curveVertex(-137,-75);
        curveVertex(-134,-88);
        curveVertex(-128,-85);
        curveVertex(-128,-85);  
      endShape();
    
      beginShape();
        curveVertex(-138,-90);
        curveVertex(-138,-90);
        curveVertex(-145,-80);
        curveVertex(-145,-90);
        curveVertex(-138,-90);
        curveVertex(-138,-90);
      endShape();
  
      beginShape();
        curveVertex(-147,-90);
        curveVertex(-147,-90);
        curveVertex(-155,-80);
        curveVertex(-152,-95);
        curveVertex(-147,-90);
        curveVertex(-147,-90);
      endShape();
        
        //RIGHT CLAW
            beginShape();
      fill(255);   //White
        curveVertex(128,-85);
        curveVertex(128,-85);
        curveVertex(137,-75);
        curveVertex(134,-88);
        curveVertex(128,-85);
        curveVertex(128,-85);  
      endShape();
    
      beginShape();
        curveVertex(138,-90);
        curveVertex(138,-90);
        curveVertex(145,-80);
        curveVertex(145,-90);
        curveVertex(138,-90);
        curveVertex(138,-90);
      endShape();
  
      beginShape();
        curveVertex(147,-90);
        curveVertex(147,-90);
        curveVertex(155,-80);
        curveVertex(152,-95);
        curveVertex(147,-90);
        curveVertex(147,-90);
      endShape();


  //FEET
  fill(206,193,184);   //Greyish White
  arc(-70,0,70,40,PI,0);
  arc(70,0,70,40,PI,0);
  
    //TOES
  fill(225);
  triangle(-105,-7,-100,0,-115,0);
  arc(-80,0,10,10,PI,0);
  arc(-95,0,10,10,PI,0);
  
  triangle(105,-7,100,0,115,0);
  arc(80,0,10,10,PI,0);
  arc(95,0,10,10,PI,0);
  
  
  
  //BODY
  beginShape();
    fill(41,115,142);   //Dark Blue
    curveVertex(75,-150);
    curveVertex(75,-150);
    curveVertex(105,-110);
    curveVertex(115,-60);
    curveVertex(105,-20);

    curveVertex(75,-9);
    curveVertex(40,-6);
    curveVertex(-40,-6);
    curveVertex(-75,-9);
    
    curveVertex(-105,-20);
    curveVertex(-115,-60);
    curveVertex(-105,-110);
    curveVertex(-75,-150);
    curveVertex(-75,-150);
  endShape();
  

  //BODY BELLY
  beginShape();
  fill(241,229,215);   //Snorlax White
    curveVertex(33,-175);
    curveVertex(33,-175);
    curveVertex(70,-140);
    curveVertex(85,-110);
    curveVertex(85,-65);
    curveVertex(65,-35);

    curveVertex(25,-20);
    curveVertex(-25,-20);

    curveVertex(-65,-35);
    curveVertex(-85,-65);
    curveVertex(-85,-110);
    curveVertex(-70,-140);
    curveVertex(-33,-175);
    curveVertex(-33,-175);
  endShape();
  
   //SNORLAX HEAD
   //HEAD
   beginShape();
   fill(41,115,142);   //Dark Blue
     curveVertex(55,-165);
     curveVertex(55,-165);
   
     curveVertex(64,-180);
     curveVertex(64,-200);
 
     //RIGHT EAR
     curveVertex(58, -225);
     curveVertex(53,-255);
     curveVertex(25,-245);
     
     //LEFT EAR
     curveVertex(-25,-245);
     curveVertex(-53,-255);
     curveVertex(-57,-225);
   
     curveVertex(-64,-200);
     curveVertex(-64,-180);
     
 
     curveVertex(-55,-165);
     curveVertex(-55,-165);    
   endShape();
   
   
   arc(0,-165,109,16,0,PI);
   
   //FACE
   beginShape();
     fill(241,229,215);   //Snorlax White
     curveVertex(40,-160);
     curveVertex(40,-160);
     curveVertex(53,-173);
     curveVertex(57,-195);
     curveVertex(50,-220);
 
     curveVertex(35,-235);
     curveVertex(0,-240);
     curveVertex(-35,-235);
 
     curveVertex(-50,-220);
     curveVertex(-57,-195);
     curveVertex(-53,-173);
     curveVertex(-40,-160);
 
     curveVertex(-20,-157);
     curveVertex(20,-157);
   
     curveVertex(40,-160);
     curveVertex(40,-160);
   endShape();
   
       //TRIANGLE ON FACE
   push();
   fill(41,115,142);   //Dark Blue
   noStroke();
   triangle(27,-242,-27,-242,0,-225);
   pop();
   
   line(21,-238,0,-225);
   line(-21,-238,0,-225);
   
       //RIGHT EYE
     beginShape();
       curveVertex(41,-219);
       curveVertex(41,-219);
       curveVertex(39,-220);
       curveVertex(36,-221);
       curveVertex(20,-222);
       curveVertex(15,-222);
       curveVertex(15,-222);
     endShape();
   
       //LEFT EYE
     beginShape();
       curveVertex(-41,-219);
       curveVertex(-41,-219);
       curveVertex(-39,-220);
       curveVertex(-36,-221);
       curveVertex(-20,-222);
       curveVertex(-15,-222);
       curveVertex(-15,-222);
   endShape();
   
       //MOUTH
     push();
     fill(255);
     line(-20,-203,20,-203);
     triangle(-20,-203,-16,-211,-12,-203);
     triangle(20,-203,16,-211,12,-203);
     pop();
     
  pop();
}
