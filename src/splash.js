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
    this.draw();
  };

  draw() {
    const ctx = this.ctx;
    let x = 1200;
    let y = 800;
    ctx.save();
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, x, y);
    ctx.restore();
    ctx.drawImage(this.splashGIF, 0, 0, x, y)
  }

  end() {
    cancelAnimationFrame(this.frameId);
  }
}