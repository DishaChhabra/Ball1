const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paperball

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Paperball = new Paper(100,550);
	right_bin = new Bin(515,500,30,100)
	bottom_bin = new Bin(600,550,200,30)
	left_bin = new Bin(685,500,30,100)
	ground = new Ground(400,580,800,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Paperball.display();
  right_bin.display();
  bottom_bin.display();
  left_bin.display();
  ground.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(Paperball.body, Paperball.body.position,{x:175, y:-405});
	}
}


