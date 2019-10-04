import MovingObject from './moving_object';
import Util from './utils';
import Player from './player';
import Bullet from './bullet';
import GameView from './game_view';

export default class Bubble extends MovingObject {
  constructor(options = {}) {
    options.color = Bubble.COLORS[Math.floor(Math.random() * Bubble.COLORS.length)];
    options.radius = options.radius || Bubble.RADII[0];
    options.pos = options.pos || options.pang.randomPosition(); // Bubbles may not have random positions. Maybe render the bubble position based on the levels.
    options.isBounceable = true;
    options.vel = options.vel || Util.randomVec(Bubble.SPEED);   // Need to change Util.randomVec(Bubble.SPEED). Or not... only change if I want Bubble to spawn with set directions
    super(options);
    this.dir = 'down'
    this.size = options.size || 'big'
  }

  collideWith(otherObject) {
    if (otherObject instanceof Player) {
      // Remove 1 life, reset the level
      this.pang.lives--;
      if (this.pang.lives === 0 ) {
        // this.pang.gameOver();
      } else {
        this.pang.resetLevel();
      }
      return true;
    } else if (otherObject instanceof Bullet) {
      //Split the bubble, remove the bullet
      this.split();
      // for now, just remove the bubble. work on split later
      // debugger
      otherObject.remove();
      // if (this.size === 'big') {
      //   this.pang.numBubbles += 1;
      // }
      return true;
    }
    return false;
  }

  draw(ctx){
    const img = new Image();
    img.src = '../assets/baloon1.png';
    ctx.drawImage( img, this.pos[0]-this.radius, this.pos[1]-this.radius, this.radius*2, this.radius*2)
  }


  split() {
    if (this.size === 'big') {
      this.pang.addSplitBubbles('medium', Bubble.RADII[1], this.pos);
      this.remove();
    } else if (this.size === 'medium') {
      this.pang.addSplitBubbles('small', Bubble.RADII[2], this.pos);
      this.remove();
    } else if (this.size === 'small') {
      this.pang.addSplitBubbles('tiny', Bubble.RADII[3], this.pos);
      this.remove();
    } else {
      this.remove();
    }
  }
}


// const blk = rgb(42, 45, 55);
// const lb = rgb(127, 179, 225);
// const lp = rgb(221, 162, 246);
// const lg = rgb(138, 241, 234);

Bubble.COLORS = [
  "rgb(42, 45, 55)",
  "rgb(127, 179, 225)",
  "rgb(221, 162, 246)",
  "rgb(138, 241, 234)",
  // "red"
];
// Bubble.COLORS = ['black', 'blue', 'green', 'purple', 'red'];
Bubble.SIZE = ['big', 'medium', 'small', 'tiny'];
Bubble.RADII = [75, 50, 25, 10];
Bubble.SPEED = 3;
