class Bird {
  constructor() {
    this.x_position = 64;
    this.y_position = height / 2;
    this.raduis = 24;

    this.gravity = 0.4;
    this.lift = -10;
    this.velocity = 0;
  }

  show() {
    fill(255, 100);
    stroke(255);

    circle(this.x_position, this.y_position, this.raduis);
  }

  up() {
    this.velocity += this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.y_position += this.velocity;
  }

  offscreen() {
    if (this.y_position > this.height) {
      console.log(floor(this.y_position), height);
      this.y_position == this.height - this.raduis * 2;
    }
  }
}
