var car,car1,car2,wall;
var speed,speed1,speed2,weight,weight1,weight2;



function setup() {

  createCanvas(1600,800);

 car=createSprite(50, 50, 50, 50);
 car1=createSprite(50,150, 50, 50);
 car2=createSprite(50,250, 50, 50);
 wall=createSprite(1000,300,60,height);
 wall.shapeColor="black";
 car.shapeColor="blue";
 car1.shapeColor="blue";
 car2.shapeColor="blue";
  speed=random(55,53);
  speed1=random(70,75);
  speed2=random(80,95);
  weight=random(400,800);
  weight1=random(900,1500);
  weight2=random(1600,1700);
car.velocityX=speed;
car1.velocityX=speed1;
car2.velocityX=speed2;
}

function draw() {
  background(225,225,225);  

  if (car.x-wall.x>car.width/2+wall.width/2) {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation<100) {
      car.shapeColor="green";
    }
    if(deformation<180 && deformation>100) {
      car.shapeColor="yellow";
    }
    if(deformation>180) {
      car.shapeColor="red";
    }

  }else {
car.shapeColor="blue";

  }


if (car1.x-wall.x>car1.width/2+wall.width/2) {
  car1.velocityX=0;
  var deformation=0.5*weight1*speed1*speed1/22500;
  if(deformation<100) {
    car1.shapeColor="green";
  }
  if(deformation<180 && deformation>100) {
    car1.shapeColor="yellow";
  }
  if(deformation>180) {
    car1.shapeColor="red";
  }

    }else {
  car1.shapeColor="blue";
  
  }
  if (car2.x-wall.x>car2.width/2+wall.width/2) {
     car2.velocityX=0;
     var deformation=0.5*weight2*speed2*speed2/22500;
    if(deformation<100) {
      car2.shapeColor="green";
    }
    if(deformation<180 && deformation>100) {
      car2.shapeColor="yellow";
    }
    if(deformation>180) {
      car2.shapeColor="red";
    }

    
    
      }else {
    car2.shapeColor="blue";
    
    }







  
  drawSprites();
}