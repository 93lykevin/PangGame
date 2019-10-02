export default class GameView{
  constructor(pang, ctx){
    this.ctx = ctx;
    this.pang = pang;
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

    setInterval(() => {
      this.pang.step(),
      this.pang.draw(this.ctx)
    }, 20)
  };
}

GameView.MOVES = {
  // up: [0, -1],
  left: [-5, 0], 
  // down: [0, 1],
  right: [5, 0]
}