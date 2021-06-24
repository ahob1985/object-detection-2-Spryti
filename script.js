// Author: Jordan Muturi

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;

// Global ML Variables
let detector;
let video;
let detections;
let isModelReady;

function setup() {
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP("Model loading please wait...");
  textP.parent(textDiv);
  video = createCapture(VIDEO, videoReady);
  detections = [];
  isModelReady = false;

}

function draw() {
  if(isModelReady === true) {
    image(video, 0, 0);
    de
  }
}

function videoReady() { 
  video.style("display", "none");
  detector = ml5.objectDetector("cossed", modelReady);

}

function modelReady() {
  isModelReady = true
}

function drawLabel(object) {
  // Draw a rectangular outline around the object
  stroke(255, 255, 0);
  noFill();
  rect(object.x, object.y, object.width, object.height);
  // Draw the label and its confidence value near the object
  noStroke
  fill(0, 255, 0);
  textSize(20);
  let label = object.label;
  let confidence = floor(object.confidence * 100);
  text(label + ": " + confidence + "% ", object.x + 10, object.y + 20);

}

function gotResults(error, results) {
  if(error) {
    console.error(error);
  } else {
    textP.html("I detect the things!");
    detections = results;
  }
}
