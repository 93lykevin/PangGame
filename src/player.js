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

  shift(unit) {
    this.vel[0] += unit[0];
    this.vel[1] += unit[1];
  }

  fireBullet(){
    const bullet = new Bullet({
      pos: [this.pos[0], this.pos[1] - Player.RADIUS],
      vel: [0, -3],
      color: 'pink',
      pang: this.pang
    });

    this.pang.add(bullet);
  }

};

Player.RADIUS = 50;