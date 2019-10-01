import MovingObject from "./moving_object";

export default class Bullet extends MovingObject{
  constructor(options) {
    options.radius = Bullet.RADIUS;
    super(options)
    this.isBounceable = false;
  }
}

Bullet.RADIUS = 2;
Bullet.speed = 15;