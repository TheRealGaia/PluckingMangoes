
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constructor = Matter.Constructor;

var stem, branch1, branch2, branch3, branch4, branch5;
var ground;
var stone;
var mango1, mango2, mango3, mango4, mango5;
var tree;
var boy;

var options={
	isStatic : false,
	restitution : 0.3,
	friction : 0.5,
	density : 1.2,
}

function preload(){
	tree = loadImage("Tree.png");
	boy = loadImage("Boy.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 680, 800, 20);

	stem = new Tree(500, 490, 20, 400);	

	branch1 = new Tree(620, 450, 50, 10);
	branch2 = new Tree(400, 450, 50, 10);
	branch3 = new Tree(600, 350, 50, 10);
	branch4 = new Tree(420, 350, 50, 10);
	branch5 = new Tree(500, 285, 50, 10);

	mango1 = new Mango(620, 430, 30);
	mango2 = new Mango(400, 430, 30);
	mango3 = new Mango(600, 330, 30);
	mango4 = new Mango(420, 330, 30);
	mango5 = new Mango(500, 265, 30);

	stone = new Stone(200, 650, 10, 10 );

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  stem.display();
  branch1.display();
  branch2.display();
  branch3.display();
  branch4.display();
  branch5.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  image(tree, 520, 450, 500, 600);
  image(boy, 200, 600, 100, 200);

  stone.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
	stone.fly();
}


