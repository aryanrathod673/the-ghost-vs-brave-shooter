var shooter,bg,ghost;
var shooterImage,bgImage,ghostImage;

function preload (){

shooterImage=loadImage("assets/shooter_1.png");
bgImage=loadImage("assets/bg.jpeg");
ghostImage=loadImage("assets/zombie.png");

}

function setup (){
createCanvas(windowWidth,windowHeight);

bg=createSprite(displayWidth/2-20,displayHeight/2-2,20,20);
bg.addImage(bgImage);
bg.scale=1;

shooter=createSprite(100,500,10,90);
shooter.addImage(shooterImage);
shooter.scale=0.3;

ghost=createSprite(1050,200,40,40);
ghost.addImage(ghostImage);
ghost.scale=0.2;


}

function draw(){
   //background(0);


   drawSprites()

}