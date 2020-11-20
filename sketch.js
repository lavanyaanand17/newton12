const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	roof1=new roof(450,100,200,20)
	//Create the Bodies Here.
	bob1= new bob(400,250,40)
	bob2= new bob(420,250,40)
	bob3= new bob(440,250,40)
	bob4= new bob(460,250,40)
	bob5= new bob(480,250,40)
	rope1= new rope(bob1.body,roof1.body,-80,0)
	rope2= new rope(bob2.body,roof1.body,-40,0)
	rope3= new rope(bob3.body,roof1.body,0,0)
	rope4= new rope(bob4.body,roof1.body,40,0)
	rope5= new rope(bob5.body,roof1.body,80,0)
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white"); 
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}

function keyPressed(){

	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
}