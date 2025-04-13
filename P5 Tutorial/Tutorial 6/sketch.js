// Set variables to draw the racetrack.
let startLine = 30;
let finishLine = 800;

// Set variables for the caterpillar.
let spacing = 20;
let segmentSize = 30;
let eyeSize = 15;

// Set variables for the race.
let numCaterpillars = 1 + 4;
let caterpillarEnds = [];

// Set a default state
// before the race begins.
let isRacing = false;

function setup() {
  createCanvas(900, 500);
 
  // Set a slow frame rate.
  frameRate(3);

  for (let i=0;i<numCaterpillars;i++) {
    caterpillarEnds.push(startLine)
  }
}

function draw() {
  // Draw the background,
  // start, and finish line.
  background(121, 96, 76);
  noStroke();
  fill(0);
  rect(startLine, 0, 5, height);
  fill(0, 255, 0);
  rect(finishLine, 0, 20, height);

  // Move caterpillars if
  // race has started.
  if (isRacing === true) {
    moveCaterpillars();
  } else { 
    // if the race hasn't started
    // instructions on start screen
    writeStart();
  }

  // Draw caterpillars at
  // the starting line.
  drawCaterpillars();
 
  // Check if there is a winner
  checkWinner();
}

// Draw a message at the
// start of the race.
function writeStart() {
  // Style the text.
  textSize(24);
  textAlign(CENTER);
  fill(255);
  noStroke();

  // Display the message.
  text("🏁 Click to start!", width / 2, height / 2);
}

// Draw one caterpillar.
function drawCaterpillar(x, y, segments) {
  // Create a loop of circles
  // to form the body.
  for (let i = 0; i < segments; i += 1) {
    fill(255, 0, 200);
    stroke(0);
    strokeWeight(1);
    circle(x, y, 50);
    x += spacing;
  }

  // Draw the caterpillar's eyes.
  fill(0);
  stroke(255);
  strokeWeight(3);
  circle(x, y - eyeSize, eyeSize);
  circle(x - eyeSize, y - eyeSize, eyeSize);
}

// Draw all the caterpillars.
function drawCaterpillars() {
  let padding = height / numCaterpillars;
  for (let i = 0; i < numCaterpillars; i += 1) {
    // Update each caterpillar x-coordinate   
    let y = (i + 0.5) * padding;

    // Update length of caterpillar.   
    crawl = random(3, 6);

    // Draw caterpillars.
    drawCaterpillar(caterpillarEnds[i], y, crawl);
  }
}

// Start the race when the
// user presses the mouse.
function mousePressed() {
  isRacing = true;
}

// Move the caterpillars.
function moveCaterpillars() {
  for (let i = 0; i < numCaterpillars; i += 1) {
    // Give each caterpillar a random
    // speed once the race has started.
    let move = round(random(5, 30));
   
    // Update caterpillars' x-coordinates
    caterpillarEnds[i] += move;
  }
}

// Display a message and stop the
// sketch if there's a winner.
function checkWinner() {
  for (let i = 0; i < caterpillarEnds.length; i += 1) {
    if (caterpillarEnds[i] >= finishLine) {
      // Style the text.
      textSize(24);
      textAlign(CENTER);
      fill(255);
      noStroke();

      // Display the message.
      text(`Caterpillar ${i + 1} wins!`,width/2,height/2);

      // end race by stopping draw() from running
      noLoop();
    }
  }
}