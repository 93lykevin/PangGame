import Pang from './pang';

export default class Splash {
  constructor(ctx) {
    this.ctx = ctx;
    this.splashGIF = new Image();
    this.splashGIF.src = './assets/intro2.gif'
    this.stepCount = 0;
  }

  loop(ctx) {
    this.frameId = requestAnimationFrame(this.loop.bind(this))
    // this.step();
    this.draw();
  };

  // step() {
  //   this.stepCount++ 
  // }

  draw() {
    const ctx = this.ctx;
    let x = 1200;
    let y = 800;
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, x, y);
    ctx.restore();
  }

  end() {
    cancelAnimationFrame(this.frameId);
  }
}