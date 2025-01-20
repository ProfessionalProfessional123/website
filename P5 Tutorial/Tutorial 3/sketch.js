// Varibles
let cloudOneX = 50;
let lineXone = 0;
let lineYone = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("navy"); // Navy background

  // Moon
  fill(255); // White color circle
  stroke(0); // Outline of circle
  circle(350, 50, 100); // The circle itself and the coords of it
  
  // Overlapping moon with navy circle to make crecent moon
  stroke("navy"); // Circle outline navy color
  fill("navy"); // Navy fill or circle
  circle(320,50,100); // Circle at coords to overlap

  // Mountains
  stroke(0); // Outline of mountains
  fill(80); // Fill of mountain
  triangle(-40,300,75,100, 250,300); // Coords of first mountain/triangle
  triangle(100,300,300,100, 500,300); // Coords of second mountain/triangle

  // Grass
  fill(50,76,50); // Color of grass from rgb
  rect(0,300, 400, 100); // Coords of grass

  // Cloud
  fill(255); // Filling color of the shape
  // Custom variable for x coordinate of cloud
  ellipse(cloudOneX, 50, 80, 40); 
  ellipse(cloudOneX - 40, 100, 60, 20); 
  ellipse(cloudOneX + 20, 150, 40, 10); 

  // Number goes up as the cloud moves
  // Resets at left edge
  cloudOneX = frameCount % width

  // Growing Trees

  // Tree 1
  // Trunk
  fill("rgb(118,80,72)"); // Tree trunk color
  rect(40, 270, 15, 50);  // Tree trunk shape + coords
  // Growing leaves
  fill("green"); // Color of leaves
  triangle(25, 270, 45, 240 - frameCount % 290, 70, 270); // Shape of leaves and framecount is making it grow

  // Tree 2
  // Trunk
  fill("rgb(118,80,72)"); // Tree trunk color
  rect(340, 330, 15, 50); // Tree trunk shape + coords
  // Leaves
  fill("green"); // Leaves color
  triangle(325, 330, 345, 240 - frameCount % 290, 370, 330); // Growing triangle leaves

  // Shooting Stars
  stroke("yellow"); // Color of satars
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);

  //set shooting star to random location
  lineXone = random(0, width);
  lineYone = random(0, height/2);

}