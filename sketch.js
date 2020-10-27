
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//var ball2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

//keyPressed();
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground1=new Ground(400,250,400,50);
ball1=new Ball(380,450);
ball2=new Ball(400,450);
ball3=new Ball(420,450);
ball4=new Ball(440,450);
ball5=new Ball(460,450);
rope1=new Rope(ball1.body,{x:300,y:240});
rope2=new Rope(ball2.body,{x:340,y:240});
rope3=new Rope(ball3.body,{x:380,y:240});
rope4=new Rope(ball4.body,{x:420,y:240});
rope5=new Rope(ball5.body,{x:450,y:240});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display();
  rope1.display();
  ball1.display();
  rope2.display();
  ball2.display();
  
  rope3.display();
  ball3.display();
  rope4.display();
  ball4.display();
  rope5.display();
  ball5.display();
  
  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body, ball1.body.position, { x:-70, y: -70 });
	}
}


