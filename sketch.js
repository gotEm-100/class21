var gobject1,gobject2,gobject3,gobject4


  


var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gobject1 = createSprite(100,350,20,20)
  gobject1.shapeColor = "green"
  gobject2 = createSprite(200,350,20,20)
  gobject2.shapeColor = "green"
  gobject3 = createSprite(300,350,20,20)
  gobject3.shapeColor = "green"
  gobject4 = createSprite(400,350,20,20)
  gobject4.shapeColor = "green"
  gobject4.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if (gobject4.x - fixedRect.x < fixedRect.width/2 + gobject4.width/2
      && fixedRect.x - gobject4.x < fixedRect.width/2 + gobject4.width/2) {
        gobject4.velocityX = gobject4.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (gobject4.y - fixedRect.y < fixedRect.height/2 + gobject4.height/2
    && fixedRect.y - gobject4.y < fixedRect.height/2 + gobject4.height/2){
      gobject4.velocityY = gobject4.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();
}
 