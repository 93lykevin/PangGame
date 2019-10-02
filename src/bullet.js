import MovingObject from "./moving_object";

export default class Bullet extends MovingObject{
  constructor(options) {
    options.radius = Bullet.RADIUS;
    super(options)
    this.isBounceable = false;
    this.height = Bullet.HEIGHT;
    this.width = Bullet.WIDTH;
  }

  move(){
    this.height -= 20;

    console.log(Math.abs(this.height))
    if (Math.abs(this.height) >= 800){
      this.remove()
    }

    // if (this.pang.isOutOfBounds([this.height, this.height], 0)){
    //   this.remove()
    // }
    
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], this.width, this.height)
    ctx.fill();
    super.draw(ctx)
  }
}

Bullet.RADIUS = 8;
Bullet.WIDTH = 8
Bullet.HEIGHT = 5
Bullet.SPEED = 15;
