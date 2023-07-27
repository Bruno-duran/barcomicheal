var barco, barcoAnimado, mar, marImagem




function preload(){
barcoAnimado=loadAnimation("./ship-1.png","./ship-2.png","./ship-3.png","./ship-4.png")
marImagem=loadImage("./sea.png")
}

function setup(){
  createCanvas(400,400);
  mar=createSprite(10,100)
  barco=createSprite(150,220)
  mar.addImage("marAnimation",marImagem)
  barco.addAnimation("barcoAnimation",barcoAnimado)
  barco.scale=0.2
}

function draw() {
  background("blue");
    drawSprites();
  mar.velocityX=-10
 if(mar.x <0){
  mar.x=mar.width/2
 }
}
