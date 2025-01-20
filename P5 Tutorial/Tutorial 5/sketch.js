//variables for color change
let redVal = 0;
let greenVal = 15;

//variable for sun position
let sunHeight = 600;

function setup() {
  createCanvas(600, 400);
  noStroke(); //removes shape outlines
}

function draw() {
  // call the sky function
  sky();

  // call the sun function
  sun();


  // call the mountains function
  mountains();

  // draw two trees
  trees()
}

// A function to draw the sky
function sky() {
  background(redVal, greenVal, 0);
}

// A function to draw the sun
function sun() {
  fill(255, 135, 5, 60);
  circle(300, sunHeight, 180);
  fill(255, 100, 0, 100);
  circle(300, sunHeight, 140);
}

//A function to draw mountains
function mountains() {
  fill(110, 50, 18);
  triangle(200,400,520,253,800,400);
  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(100,50,12);
  triangle(-100,400,150,200,0,400);
  fill(120,80,50);
  triangle(200,400,450,250,300,400);
}

//A function to draw trees with different x and y and size
function tree(x,y,size) {
  fill(80,30,20);
  rect(x-size,y,size*2,size*6);
  fill(20,130,5);
  triangle(x-size*3,y,x,y-size*8,x+size*3,y)
}

//A function that creates a line for trees to be drawn
function treeLine(x) {
  let y = -0.7 * x + 450;
  return y;
}

//A function that draws many trees 
//using treeLine() and tree() functions
function trees() {
  // First tree
  let x = 150;
  let y = treeLine(x);
  tree(x, y, 5);
 
  // Second tree
  x = 180;
  y = treeLine(x);
  tree(x, y, 5);
 
  // Third tree
  x = 210;
  y = treeLine(x);
  tree(x, y, 5);
}