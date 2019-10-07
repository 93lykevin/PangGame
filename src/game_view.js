export default class GameView{
  constructor(pang, ctx){
    this.ctx = ctx;
    this.pang = pang;
    this.lastTime = 0;
    this.gameOver = false;
    this.player = this.pang.addPlayer();
  }

  bindKeyHandlers() {
    const player = this.player;

    Object.keys(GameView.MOVES).forEach((k) => {
      const dir = GameView.MOVES[k];
      key(k, () => { player.shift(dir); });
    });

    key("z", () => {player.fireBullet()})
  };

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  };

  animate(time) {
    this.frameId = requestAnimationFrame(this.animate.bind(this));
    const timeDelta = time - this.lastTime;
    this.pang.step(timeDelta);
    if (this.pang.lives <= 0) {
      this.gameOverMessage();
      cancelAnimationFrame(this.frameId);
    } else {
      this.pang.draw(this.ctx);
    }
    this.lastTime = time;
  }

  gameOverMessage() {
    const ctx = this.ctx;
    ctx.save();
    this.drawGameOver(ctx);
    // this.drawRetry();
    // this.drawRank();
    ctx.restore();
  }

  drawGameOver(ctx) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(0, 0, this.pang.DIM_X, this.pang.DIM_Y);
    ctx.fillStyle = 'green';
    ctx.font = '123px VT323';
    ctx.shadowColor = "#f90";
    const text = 'GAME OVER';
    const textWidth = ctx.measureText(text).width
    ctx.fillText(text, this.pang.DIM_X/2 - textWidth/2 , this.pang.DIM_Y/2)
  }
}

GameView.MOVES = {
  // up: [0, -1],
  left: [-3, 0], 
  // down: [0, 1],
  right: [3, 0]
}