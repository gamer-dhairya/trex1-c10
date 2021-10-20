
var trex ,trex_running;
var edges;
var ground,groundImg;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImg=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  edges=createEdgeSprites();
  //create a trex sprite
  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  trex.x=50;

  ground=createSprite(300,180,600,20);
  ground.addImage("ground",groundImg);
  ground.x=ground.width/2;
}

function draw(){
  //set background color to white
  background("white")

  ground.velocityX=-2;


  //console.log(trex.y);
  console.log(ground.x);

  if(ground.x<0){
    ground.x=ground.width/2;
  }
  //jump when space key is pressed
  if(keyDown("SPACE")){
    trex.velocityY=-10;
  }
  //gravity
  trex.velocityY=trex.velocityY+0.5;  

  //stop trex from falling down
  trex.collide(ground);
  drawSprites();
}
