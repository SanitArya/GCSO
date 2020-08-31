var car,wall;

var colour;

function setup() {
  createCanvas(1200,400);

  

  speed =Math.round(random(4,40)); 
  weight = Math.round(random(200,2000));

  car = createSprite(40,200,50,30);
  car.velocityX = speed;
  
  wall = createSprite(1100,200,30,300);
  wall.shapeColor = "white";

}

function draw() {
  background("black");  

if(wall.x-car.x<wall.width/2+car.width/2){

  car.velocityX = 0;

  var deformation = (0.5*weight*speed*speed)/22500;  

  if(deformation<=8){

    car.shapeColor = "green";
  }

  if(deformation>=9 && deformation<=20){

    car.shapeColor = "yellow";
  }

  if(deformation>20){

    car.shapeColor = "red";
  }
}

  textFont("BOLD");
  fill("White");
   text("Speed: "+speed,20,20);
   text("Weight: "+weight,80,20);

  drawSprites();
}