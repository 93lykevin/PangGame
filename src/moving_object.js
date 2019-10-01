export default class MovingObject {
  constructor(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.pang = options.pang;
    this.isBounceable = options.isBounceable;
  }

  draw(ctx){
    ctx.beginPath();
    ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true );
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.vel = this.pang.bounce(this.pos, this.vel, this.radius)
  }


}