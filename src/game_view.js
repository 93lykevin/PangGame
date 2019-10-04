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
    requestAnimationFrame(this.animate.bind(this));
    const timeDelta = time - this.lastTime;
    this.pang.step(timeDelta);
    this.pang.draw(this.ctx);
    this.lastTime = time;
  }
}

GameView.MOVES = {
  // up: [0, -1],
  left: [-3, 0], 
  // down: [0, 1],
  right: [3, 0]
}