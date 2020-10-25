
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(50);
  drawSprites();

  var hr = hour();
  var min = minute();
  var sec = second();
  
  noFill();
  translate(width/2, height/2);
  rotate(-90);

  strokeWeight(15);
  stroke(255);
  ellipse(0, 0, 560, 560);

  strokeWeight(10);
  stroke(255, 255, 0);
  var seconds = map(sec, 0, 60, 0, 360);
  arc(0, 0, 500, 500, 0, seconds);

  stroke(0, 255, 255);
  var minutes = map(min, 0, 60, 0, 360);
  arc(0, 0, 530, 530, 0, minutes);

  stroke(255, 0, 255);
  var hours = map(hr, 0, 12, 0, 360);
  arc(0, 0, 470, 470, 0, hours);

  push();
  stroke(0, 255, 255);
  rotate(hours);
  line(0, 0, 100, 0);
  pop();

  push();
  stroke(255, 0, 255);
  rotate(minutes);
  line(0, 0, 200, 0);
  pop();

  push();
  stroke(255, 255, 0);
  rotate(seconds);
  line(0, 0, 230, 0);
  pop();

  strokeWeight(20);
  stroke(255);
  point(0, 0);

  
}