export default class GameView{
  constructor(pang, ctx){
    this.ctx = ctx;
    this.pang = pang;
    // this.player = add.player();
  }

  start() {
    setInterval(() => {
      this.pang.moveObjects(),
      this.pang.draw(this.ctx)
    }, 20)
  };
}