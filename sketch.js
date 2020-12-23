
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var leftSideBin,rightSideBin,bottomSideBin

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	leftSideBin=new Dustbin(100,100,100,100)
	rightSideBin=new Dustbin(200,200,20,100)
	bottomSideBin=new Dustbin(300,300,200,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  leftSideBin.display()
  rightSideBin.display()
  bottomSideBin.display()


}



