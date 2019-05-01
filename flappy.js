var bird = new Bird();
var pipes = [];

function setup() {
  createCanvas(width, height);
  pipes.push(new Pipe());
}

function draw() {

  if (frameCount % 120 == 0) {
    pipes.push(new Pipe());
  }

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  background(0);
    bird.update();
    bird.show();

  for (let pipe of pipes) {
    pipe.show();
  }
}

function keyPressed() {
  if (key === " ") {
    bird.up();
  }
}
