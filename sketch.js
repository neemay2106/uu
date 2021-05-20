var man,ground,manImage,backgroundImg;
var stacle,stacleimg,bg;




function preload(){
  manImage = loadAnimation("images/run 1.png","images/run2.png","images/run3.png","images/run 4.png","images/run 5.png");
  backgroundImg = loadAnimation("images/png/BG/bgg.png","images/png/BG/back.png","images/png/BG/tt.png","images/png/BG/images (4).png");
  
  stacleimg = loadImage("images/png/BG/coin.png");
  
}

function setup() {
  createCanvas(1600,800);
  
  ground = createSprite(400,390,800,10);
 
 bg = createSprite(800,400,1600,800); 
 
 bg.addAnimation("background",backgroundImg);
 man =  createSprite(220,300,55,50);  
 man.addAnimation("manimage",manImage);   
 bg.scale = 2;
  man.scale = 0.3;
}


function draw() {
  background ("white");
 bg.velocityX = -2;
 ground.visible = false;
if(keyDown("space")){ 
 man.velocityY = -10;
 
console.log("display  space");
}
man.velocityY =  man.velocityY+ 1;


if(bg.x<0){
  bg.x = bg.width/2 
}
obstacle();
man.collide(ground);
  drawSprites();

}
function obstacle(){
  
 
  if(frameCount%80 === 0){
    
    stacle = createSprite(800,100,20,20);
    stacle.addImage("stacleimg",stacleimg);
    stacle.scale = 0.1;
    stacle.y = Math.round(random(300,100));
    stacle.velocityX = -2;
  }
  
}