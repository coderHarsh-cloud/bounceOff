var fixedRect, movingRect,obj1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(400, 200,80,30);
  obj1.shapeColor = "green";
  obj1.debug = true;
  //obj1.velocityX=5;
  obj1.velocityY=5;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,obj1);
  
  drawSprites();
}

