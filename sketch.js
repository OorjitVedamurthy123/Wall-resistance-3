var bullet;
var weight,speed;
var wall;
var thickness;
var calc;
var damage;
function setup() {
  createCanvas(1600,400);
  weight = random(30,52);
  speed = random(123,320);
   bullet = new Bullet(weight,speed);
  bullet.sprite.shapeColor = "white";
  thickness = random(22,83);
   wall = new Wall(thickness);
  wall.sprite.shapeColor = "white";
}

function draw() {
  background("black"); 
  
 if( bullet.sprite.collide(wall.sprite)){
 calc = calculateDamage();
  
 } 
 if(calc < 5){
   wall.sprite.shapeColor = "green"
 }
 if(calc > 5 && calc < 10 ){
  wall.sprite.shapeColor = "yellow"
 }
 if(calc > 10){
   wall.sprite.shapeColor = "red"
 }
 

  drawSprites();
}
function calculateDamage(){
  damage = (0.5 * bullet.weight * bullet.speed * bullet.speed)
    /(wall.thickness * wall.thickness * wall.thickness);
    return damage;
}
