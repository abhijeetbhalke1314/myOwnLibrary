var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
var gameObject5, gameObject6;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(800, 400, 80, 30);
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
  gameObject5 = createSprite(200, 600, 50, 50);
  gameObject5.shapeColor = "red";
  gameObject6 = createSprite(600, 600, 50, 50);
  gameObject6.shapeColor = "blue";
  gameObject5.velocityX = 2;
  gameObject6.velocityX = -2;
}

function draw() {
  background(0, 0, 0);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if (isTouching(gameObject1, movingRect)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red"; 
  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  
  bounceOff(gameObject5, gameObject6);
  
  drawSprites();
}



