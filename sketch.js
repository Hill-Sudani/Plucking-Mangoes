const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy = loadImage("boy.png")
}

function setup() 
{
	createCanvas(1280, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new tree(900,675);
	ground1 = new ground(640,675,1500,20);
	stone1 = new stone(100,450,50);
	rope1 = new launch(stone1.body,{x:100,y:450}); 
	mango1 = new mango(800,350);
	mango2 = new mango(900,360);
	mango3 = new mango(850,250);
	mango4 = new mango(900,300);
	mango5 = new mango(950,300);
	mango6 = new mango(9750,350);
	mango7 = new mango(1100,350);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("white");

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);

  
  image(boy,100,400,150,350);
  
  tree1.display();
  ground1.display();
  stone1.display();
  rope1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	rope1.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() 
{
	if (keyCode === 32)
	{
      Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
}

function detectCollision(stone,mango)
{
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;

	var Distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(Distance<=20+stone.dia)
	{
		Matter.Body.setStatic(mango.body,false);
	}
}


