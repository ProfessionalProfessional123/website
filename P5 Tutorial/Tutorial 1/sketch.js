function setup() {
  createCanvas(1263, 523);
}

function draw() {
  //when mouse button is pressed, circles turn black
if (mouseIsPressed === true) {
  fill(0);
} else {
  fill(255);
}

//white circles drawn at mouse position
circle(mouseX, mouseY, 100);
}
