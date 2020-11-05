function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
polygon = Bodies.circle(50, 200, 20);
World.add(world, polygon);

slingShot = new Slingshot(this.polygon, { x: 100, y: 200 });

function draw() {
  background(255,255,255);  
  drawSprites();
}