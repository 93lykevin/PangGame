import MovingObject from "./moving_object";
import Bullet from './bullet';

export default class Player extends MovingObject {
  constructor(options){
    options.radius = Player.RADIUS;
    options.color = 'black';
    options.vel = options.vel || [0,0];
    super(options)
    this.isBounceable = false;
  }

  draw(ctx) {
    // ctx.beginPath();
    // ctx.rect(this.pos[0], this.pos[1], 50, 100)
    // ctx.closePath();

    const img = new Image();
    img.src = "../assets/pang.png";
    ctx.drawImage( img, 0, 1.3, 31, 38, this.pos[0], this.pos[1], 80, 125 )
    // ctx.stroke();
  }

  shift(unit) {
    this.vel[0] += unit[0];
    this.vel[1] += unit[1];
  }

  fireBullet(){
    if (this.pang.bullets.length === 0) {
      const bullet = new Bullet({
        pos: [this.pos[0] + 28, this.pos[1]+100],
        vel: [0, -10],
        color: 'pink',
        pang: this.pang
      });
      this.pang.add(bullet);
    }
  }

};

Player.RADIUS = 25;