var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var boxRight, boxLeft, boxBase;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 5 , 5, {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	boxBase = Bodies.rectangle(400, 640, 200, 20, {isStatic:true});
	World.add(world, boxBase);
	boxLeft = Bodies.rectangle(300, 600, 20, 100, {isStatic:true});
	World.add(world, boxLeft);
	boxRight = Bodies.rectangle(500, 600, 20, 100, {isStatic:true});
	World.add(world, boxRight);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  rectMode(CENTER);
  rect(packageBody.position.x, packageBody.position.y, 5, 5);

  rect(boxBase.position.x, boxBase.position.y, 200, 20);
  rect(boxLeft.position.x, boxLeft.position.y, 20, 100);
  rect(boxRight.position.x, boxRight.position.y, 20, 100);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
	Matter.Body.scale = 1;

  }
}



