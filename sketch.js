var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car=createSprite(200,200,40,40);
  car.shapeColor="blue";
  wall=createSprite(1000,200,20,100);
  wall.shapeColor="pink";
  car.velocityX=4;

}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;


if(isTouching(car,wall)){
  //car.velocityX=0;
  textSize(50)
  fill("yellow");
  text("isTouching",200,200);
}

BounceOff(car,wall)
  drawSprites();
}

