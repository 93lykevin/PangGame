import Util from './utils';

export default class MovingObject {
  constructor(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.pang = options.pang;
    this.isBounceable = options.isBounceable;
  }

  collideWith(otherObject) {
    //if Bubble collides with Bullet, split the bubble, remove the bullet
    //if Bubble collides with Player, reset the level
  }

  draw(ctx){
    ctx.beginPath();
    ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true );
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  isCollidedWith(otherObject) {
    const centerDist = Util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }

  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.vel = this.pang.bounce(this.pos, this.vel, this.radius);
  }

  movePlayer() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.vel[0] *= 0.9; //friction
    this.vel[1] *= 0.9; //friction
    this.vel = this.pang.bounce(this.pos, this.vel, this.radius);
  }

  remove() {
    this.pang.remove(this);
  }


}