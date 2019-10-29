import Splash from './splash';
import Player from './player';

export default class GameView{
  constructor(pang, ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
    this.pang = pang;
    this.lastTime = 0;
    this.player = this.pang.addPlayer();
  }

  bindKeyHandlers() {
    const player = this.player;

    document.addEventListener("keydown", (e) => {
      // console.log(e.key)
      if (e.key === 'ArrowRight') {
        player.moveRight = true;
      } else if (e.key === 'ArrowLeft') {
        player.moveLeft = true;
      }
    })

    document.addEventListener("keyup", (e) => {
      // console.log("up", e.key)
      if (e.key === 'ArrowRight') {
        player.moveRight = false;
      } else if (e.key === 'ArrowLeft') {
        player.moveLeft = false;
      }
    })

    key("space", () => {player.fireBullet()})
    // key("z", () => {this.pang.gameOver = true})
  };

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  };

  //switch this for when splash works
  // start() {
  //   this.initSplash();
  //   this.bindStartListener()
  // };

  startGame() {
    this.canvas.removeEventListener("mousedown", this.buttonHandler);
    this.splash.end();
    delete this.splash;

    this.pang.addBubbles('big');
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  };

  initSplash() {
    this.splash = new Splash(this.ctx);
    this.splash.loop();
  }

  bindStartListener() {
    this.buttonHandler = this.handleButton.bind(this);
    this.canvas.addEventListener("mousedown", this.buttonHandler);
  }

  handleButton(e) {
    this.startGame();
  }

  // handleButton(e) {
  //   const pos = this.getEventCoordinates(e);
  //   const x = pos[0];
  //   const y = pos[1];
  //   if (this.soundButtonSelected(x, y)) this.sound.on = true;
  //   this.gameOverMessage.setSound(this.sound);
  //   if (this.sound.on || this.soundOffSelected(x, y)) this.startGame();
  // }

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
}

// GameView.MOVES = {
//   // up: [0, -1],
//   left: [-3, 0], 
//   // down: [0, 1],
//   right: [3, 0]
// }

GameView.MOVES = {
  left: 'left',
  right: 'right'
}