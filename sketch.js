const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var paperObject;
var groundObject;

//function preload() {

//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new paperClass(100, 600, 30);

	groundObject = new groundClass(350, 690, 700, 20);

	Engine.run(engine);

}


function draw() {
	background(0);
	Engine.update(engine);

	paperObject.display();
	groundObject.display();
	//paperObject.debug();
	//groundObject.debug();

	//drawSprites();
}

function keypressed() {
	Matter.body.applyForce(paperObject.body, paperObject.body.position, { x: 85, y: -85 });
}