const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var g1Dress;
var g2Ball;
var g3Aeroplane;
var g4Robot;
var g5Teddy;
var ground1,ground2;
var ring1;
var ring2,ring3,ring4;
var p1Trophy;

var score;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    g1Dress =new Gift1(200,100,55,55);
    g2Ball =new Gift2(400,100,55,55);
    g3Aeroplane =new Gift3(600,100,55,55);
    g4Robot =new Gift4(800,100,55,55);
    g5Teddy =new Gift5(1000,100,55,55);

    ring1 =new Ring(width/2,height-50,100,100);
    ring2 =new Ring2(width/2,height-100,100,100);

    ground1 =new Ground(width/2,height-10,width,20);
    //ground2 =new Ground(width/2,height-450,width,20);

    //p1Trophy =new Prize(600,600,100,100);

    score=0;
}

function draw(){
    background("lightblue");
    text("Score: "+ score, 100,50);
    Engine.update(engine);

    createEdgeSprites();
    
    
    g1Dress.display();
    g2Ball.display();
    g3Aeroplane.display();
    g4Robot.display();
    g5Teddy.display();
    //ring1.display();
    ring2.display();
    ground1.display();
    //ground2.display();
    //p1Trophy.display();

}

function keyPressed(){
if (keyCode===32){
Matter.Body.applyForce(ring2.body,ring2.body.position,{x:-1000,y:-800});
}
}