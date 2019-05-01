class Pipe {
    constructor() {
      this.pipes_start_pos_x = width;
      this.t_pipe_top = 0;
      this.t_pipe_lenght = random(height / 2);
      this.b_pipe_top = this.t_pipe_lenght + random(90, 130);
      this.b_pipe_length = height - this.b_pipe_top;
      this.pipe_width = 40;
      this.speed = 2;
    }
  
    show() {
      stroke(255);
      fill(200);
      rect(this.pipes_start_pos_x, this.t_pipe_top, this.pipe_width, this.t_pipe_lenght);
      rect(this.pipes_start_pos_x, this.b_pipe_top, this.pipe_width, this.b_pipe_length);
    }

    update() {
      this.pipes_start_pos_x -= this.speed;
    }
  
    offscreen() {
      if (this.pipes_start_pos_x < -this.pipe_width) {
        return true;
      } else {
        return false;
      }
    }
  }
  