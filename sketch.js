
var car,wall;

function setup(){
    createCanvas(800,400);
wall=createSprite(790, 200, 40, 380);
car=createSprite(450,280,85,50);
wall.shapeColor="black";
car.shapeColor='blue';
car.debug=true;
wall.debug=true;
}
function draw(){
 background(255,255,255); 
 car.velocityX=4;
 if(car.isTouching(wall)){
     car.shapeColor="red";
     car.velocityX=0;
 }else{
car.shapeColor='blue';
}
drawSprites();
}
function isTouching(){
    if (wall.x-car.x<car.width/2+wall.width/2){
    return true;
}else {
    return false;
}
}