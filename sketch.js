const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var enemy1,enemy2;
var log1,log2,log3,log4;
var striker;
var slingshot;
var backgroundImg;


function preload(){

backgroundImg = loadImage("Galaxy BackGround.jpg");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    enemy1 = new Enemy(810,350); 
    log1 = new Log(810,260,300,PI/2);
    striker = new Striker(100,100);
    
    box3 = new Box(700,240,70,70); 
    box4 = new Box(920,240,70,70);  
    enemy2 = new Enemy(810,220);
    log2 = new Log(810,180,300,PI/2);

    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);
    box5 = new Box(810,160,70,70);

    slingshot = new SlingShot(striker.body,{x:200, y:100});

    console.log(enemy1);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
   
box2.display();
enemy1.display();
log1.display();
box3.display();
box4.display();
enemy2.display();
log2.display();
box5.display();
log3.display();
log4.display();
striker.display();
slingshot.display();



}

function mouseDragged(){
    Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}