var starImg,bgImg;
var star, starBody;
var fada, fada2;
var fadaImg;
var fadaV;
var vozfada;

//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    vozfada = loadSound("sound/JoyMusic.mp3");
    //carregar animação de fada
    fadaImg = loadImage("images/fairyImage1.png");
    ///fadaV = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    vozfada.play();
    

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(200,550);
    fada.addImage(fadaImg);
    fada.scale = 0.2;

    //fada2 = createSprite(200,250);
    //fada2.addAnimation(fadaV);
    //fada2.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    star.velocityY=5;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw() {


    background(bgImg);
   
    if(star.y > 100 && starBody.position.y > 100 ){
        Matter.Body.setStatic(starBody,true);
    }
    

    drawSprites();
}


function keyPressed(){

  

  if(keyCode === LEFT_ARROW){
    fada.addImage("images/fairyImage1.png", fadaImg);
   fada.velocityX= -5
  
  }
  
  if(keyCode === RIGHT_ARROW){
    fada.addImage("images/fairyImage1.png", fadaImg);
   fada.velocityX= 5
  

  }
}