const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var snow=[];
var bg;
var snowMan;
var santa;
var boyWalking,boyStanding,boy;

function preload()
{
  bg=loadImage("Images/snow2.jpg")

  snowMan=loadImage("Images/SnowMan.png")
  santa=loadImage("Images/Santa.png")

  boyWalking=loadAnimation("Boy_Trans/B.png","Boy_Trans/C.png","Boy_Trans/D.png","Boy_Trans/E.png","Boy_Trans/F.png","Boy_Trans/G.png","Boy_Trans/H.png","Boy_Trans/I.png",)
  boyStanding=loadAnimation("Boy_Trans/A.png")
  
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
  boy.scale=1.7;
  
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

  if(keyCode===32)
  {
    boy.changeAnimation("Walking",boyWalking)
    boy.velocityX=4 
  }

}
