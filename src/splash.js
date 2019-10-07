export default class Splash {
  constructor(ctx) {
    this.ctx = ctx;
    // this.foreground = new Image();
    // this.foreground.src = ADD IN IMAGE FOR SPLASH PAGE
    this.stepCount = 0;
  }

  loop(ctx) {
    this.frameId = requestAnimationFrame(this.loop.bind(this))
    this.step();
    this.draw();
  };

  step() {
    this.stepCount++ 
  }
}