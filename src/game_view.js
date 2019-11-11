import Splash from './splash';
import Player from './player';

export default class GameView{
  constructor(pang, ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
    this.pang = pang;
    this.lastTime = 0;
    this.player = this.pang.addPlayer();

    this.playGame = this.playGame.bind(this);
  }

  bindKeyHandlers() {
    const player = this.player;

    document.addEventListener("keydown", (e) => {
      if (e.key === 'ArrowRight') {
        player.moveRight = true;
      } else if (e.key === 'ArrowLeft') {
        player.moveLeft = true;
      }
    })

    document.addEventListener("keyup", (e) => {
      if (e.key === 'ArrowRight') {
        player.moveRight = false;
      } else if (e.key === 'ArrowLeft') {
        player.moveLeft = false;
      }
    })

    key("space", () => {player.fireBullet()})


    document.addEventListener("click", this.playGame)
  };

  playGame() {
    this.pang.addBubbles('big');
    requestAnimationFrame(this.animate.bind(this));
    document.getElementById("instructions").style.display = "none";
    document.getElementById("canvas-w").style.visibility = "visible";
    document.removeEventListener('click', this.playGame, false)
  }

  animate(time) {
    this.frameId = requestAnimationFrame(this.animate.bind(this));

    if (this.pang.gameOver === true) {
      this.gameOverMessage();   //check game over on every before any animation
      cancelAnimationFrame(this.frameId);
    } else {
      const timeDelta = time - this.lastTime;
      this.pang.step(timeDelta);
      this.pang.draw(this.ctx);
    }
    this.lastTime = time;
  }

  gameOverMessage() {
    const ctx = this.ctx;
    ctx.save();
    this.drawGameOver(ctx);
    this.drawScore(ctx)
    this.drawRetry(ctx);
    ctx.restore();
  }

  drawGameOver(ctx) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, this.pang.DIM_X, this.pang.DIM_Y);
    // ctx.fillStyle = "url(./assets/background2.png)"
    ctx.fillStyle = 'green';
    ctx.font = '123px VT323'; 
    const text = 'GAME OVER';
    const textWidth = ctx.measureText(text).width
    ctx.fillText(text, this.pang.DIM_X/2 - textWidth/2 , this.pang.DIM_Y/2 - 200)
  }

  drawScore(ctx) {

  }

  drawRetry(ctx) {
    ctx.font = "36px VT323";
    ctx.fillStyle = "#ff9";
    var text = "RETRY";
    var textWidth = ctx.measureText(text).width;
    ctx.fillText(text, this.pang.DIM_X/2 - textWidth/2 , this.pang.DIM_Y/2 + 300)
  };

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    // this.pang.addBubbles('big');
    // requestAnimationFrame(this.animate.bind(this));
  };
}

GameView.MOVES = {
  left: 'left',
  right: 'right'
}