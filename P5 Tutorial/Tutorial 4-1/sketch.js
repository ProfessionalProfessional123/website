
let sunHeight;
let horizon = 200;
function setup() {
  createCanvas(400, 400);
}
function draw() {

  //sun follows y-coordinate of mouse
  sunHeight = mouseY;

  //light blue background if sun is above horizon

  //with if-else statement

  if (sunHeight < horizon) {
    background("lightblue"); // blue sky if above horizon
  } else {
    background(0); // night sky otherwise
  }

  //sun
  fill("yellow");
  circle(200, sunHeight, 100);


  // draw line for horizon
  stroke('green');
  line(0,horizon,400,horizon);

  //grass

  fill("green");

  rect(0, horizon, 400, 400);

}