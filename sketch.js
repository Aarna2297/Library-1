var fixedRect,movingRect;
var rect1,rect2;
var sq1, sq2
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="teal";
  movingRect=createSprite(400,200,50,30);
  movingRect.shapeColor="teal";
  rect1=createSprite(100,100,50,50);
  rect1.shapeColor="green"
  rect1.velocityX=2
  rect2=createSprite(700,100,50,50);
  rect2.shapeColor="red"
  rect2.velocityX=-2
  sq1=createSprite(200,100,50,50);
  sq1.shapeColor="black"
  sq1.velocityX=2
  sq2=createSprite(300,100,50,50);
  sq2.shapeColor="black"
  
}

function draw() {
  background("pink");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,sq1)){
    sq1.shapeColor="purple"
    movingRect.shapeColor="purple"
  }
else{
  sq1.shapeColor="teal"
  movingRect.shapeColor="teal"
}
bounceOff(rect1,sq2)
  drawSprites();
}
