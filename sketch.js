var player, target, target2,target3,target4,target5;
var taregetimg, bulletimg;
var score = 0;

function preload(){
  targetimg = loadImage("Target.png");

}

function setup() {
  createCanvas(1200,800);
}

function draw() {
  background("cyan"); 

  textSize(20);
  text("Score:" + score,550,50);
  
  spawnTargets();
  
  if(mousePressedOver(target)) {
     score+=1;
     target.destroy();
  }

  if(mousePressedOver(target2)) {
    score+=1;
    target2.destroy();
 }

 if(mousePressedOver(target3)) {
  score+=1;
  target3.destroy();
}

if(mousePressedOver(target4)) {
  score+=1;
  target4.destroy();
}

if(mousePressedOver(target5)) {
  score+=1;
  target.destroy();
}
  
  drawSprites();
}

function spawnTargets() {
  
  if (frameCount % 75 === 0) {
    target = createSprite(Math.round(random(100,1100)),Math.round(random(200,600)),10,10);
    target.addImage(targetimg);
    target.scale = 0.13;
    
    target.lifetime = 55;
  }

  if (frameCount % 75 === 0) {
    target2 = createSprite(Math.round(random(100,1100)),Math.round(random(200,600)),10,10);
    target2.addImage(targetimg);
    target2.scale = 0.13;
    
    target2.lifetime = 55;
  }

  if (frameCount % 75 === 0) {
    target3 = createSprite(Math.round(random(100,1100)),Math.round(random(200,600)),10,10);
    target3.addImage(targetimg);
    target3.scale = 0.13;
    
    target3.lifetime = 55;
  }

  if (frameCount % 75 === 0) {
    target4 = createSprite(Math.round(random(100,1100)),Math.round(random(200,600)),10,10);
    target4.addImage(targetimg);
    target4.scale = 0.13;
    
    target4.lifetime = 55;
  }

  if (frameCount % 75 === 0) {
    target5 = createSprite(Math.round(random(100,1100)),Math.round(random(200,600)),10,10);
    target5.addImage(targetimg);
    target5.scale = 0.13;
    
    target5.lifetime = 55;
  }

}