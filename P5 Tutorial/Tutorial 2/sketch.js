function setup() {
  // Creates a canvas 600 pixels wide
  // and 400 pixels high.
  createCanvas(600, 400);
}

function draw() {
  // Changing background coulor using RGB
  background(135, 206, 235);

  // Sun
  fill("yellow"); // Fill circle with yellow  
  stroke("orange"); // Orange outline on circle 
  strokeWeight(15); // Thickness of circle outline    
  circle(550, 50, 100); // Making circle in the coords 550, 50, 100

  // Grass
  stroke(0); // Changing outline to black
  strokeWeight(1); // Outline thickness to 1
  fill("green"); // Changing coulor of grass to green
  rect(0, 200, 600, 200); // Coords of the grass

  // Emojis
  text("🐞", mouseX, mouseY); // Let emoji follow mouse 
  // text("🐞", 100, 250); - Add flower emoji in specific spot
  text("🌸", 300, 250); // Add ladybug emoji
  textSize(75); // Change emoji size
}