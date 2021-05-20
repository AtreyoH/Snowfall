const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var snow=[];
var bg;
var snowMan;
var santa;
var boyWalking,boyStanding,boyReverse,boy;
var text,textImage;
var playState="serve"

function preload()
{
  bg=loadImage("Images/snow2.jpg")

  snowMan=loadImage("Images/SnowMan.png")
  santa=loadImage("Images/Santa.png")

  boyWalking=loadAnimation("Boy_Trans/B.png","Boy_Trans/C.png","Boy_Trans/D.png","Boy_Trans/E.png","Boy_Trans/F.png","Boy_Trans/G.png","Boy_Trans/H.png","Boy_Trans/I.png",)
  boyStanding=loadAnimation("Boy_Trans/A.png")
  //boyReverse=loadAnimation("Boy_Reverse/B.png","Boy_Reverse/C.png","Boy_Reverse/D.png","Boy_Reverse/E.png","Boy_Reverse/F.png","Boy_Reverse/G.png","Boy_Reverse/H.png","Boy_Reverse/I.png",)
  //textImage=loadImage("Images/Text.jpg")
}
function setup() 
{
  createCanvas(1400,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);

  boy=createSprite(100,660);
  boy.addAnimation("Standing",boyStanding);
  boy.addAnimation("Walking",boyWalking);
  boy.addAnimation("WalkingReverse",boyReverse);
  boy.scale=1.7;
  
  /*text=createSprite(400,200)
  text.addImage(textImage)*/

}

function draw() 
{
  Engine.update(engine);
  background(bg); 
  image(snowMan,1100,550,190,240)
  image(santa,1000,0,400,300)

  ground.display();
  drawSprites();

  if(frameCount%1===0)
  {
    snow.push(new Snow(random(0,1400),10,-10,10))
  }
   
  for (var j=0;j<snow.length;j++)
  {
    snow[j].display()
  } 

  if(keyCode===32 && playState=="serve")
  {
    boy.changeAnimation("Walking",boyWalking)
    boy.velocityX=4 
    playState==="play"
  }

 /* if(keyCode===68 && playState=="play")  //for D
  {
    boy.changeAnimation("Walking",boyWalking)
    boy.velocityX=4 
  }

  if(keyCode===65 && playState=="play")   //for A
  {
    boy.changeAnimation("WalkingReverse",boyReverse)
    boy.velocityX=-4
  }*/

  
}
