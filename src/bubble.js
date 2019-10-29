import MovingObject from './moving_object';
import Util from './utils';
import Player from './player';
import Bullet from './bullet';
import Pang from './pang';

export default class Bubble extends MovingObject {
  constructor(options = {}) {
    options.color = Bubble.COLORS[Math.floor(Math.random() * Bubble.COLORS.length)];
    options.radius = options.radius || Bubble.RADII[0];
    options.pos = options.pos || options.pang.randomPosition(); // Bubbles may not have random positions. Maybe render the bubble position based on the levels.
    options.isBounceable = true;
    options.vel = options.vel || Util.randomVec(Bubble.SPEED);   // Need to change Util.randomVec(Bubble.SPEED). Or not... only change if I want Bubble to spawn with set directions
    options.acc = 5;
    super(options);
    this.dir = 'down'
    this.size = options.size || 'big'
  }

  collideWith(otherObject) {
    if (otherObject instanceof Player) {
      this.pang.lives--;  // Remove 1 life, check if game is over --> end game, if not --> reset the level
      if (this.pang.lives === 0 ) {
        this.pang.gameOver = true;
      } else {
        this.pang.resetLevel();
      }
      return true;
    } else if (otherObject instanceof Bullet) {
      this.split();   //Split the bubble
      otherObject.remove(); // remove the bullet
      return true;
    }
    return false;
  }

  draw(ctx){
    const img = new Image();
    img.src = './assets/baloon1.png';
    ctx.drawImage( img, this.pos[0]-this.radius, this.pos[1]-this.radius, this.radius*2, this.radius*2)
  }

  //ADD ACCELERATION TO BUBBLE TO MAKE PARABOLIC MOVEMENT
  move(timeDelta) {
    //timeDelta = number of ms since last call of move(
    //if computer is busy --> timeDelta will be larger
    //--> moveObject should move MORE to make up for lag
    //velocity of an object is how far it should move in 1/60th of a second
    const velocityScale = timeDelta / MovingObject.NORMAL_FRAME_TIME_DELTA;
    const offsetX = this.vel[0] * velocityScale;
    const offsetY = this.vel[1] * velocityScale;

    this.pos[0] += offsetX;
    this.pos[1] += offsetY;


    if (this.pang.isOutOfBounds(this.pos, this.radius)) {
      if (this.isBounceable) {
        this.vel = this.pang.bounce(this.pos, this.vel, this.radius);
      } else {
        this.remove();
      }
    }
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

Bubble.COLORS = [
  "rgb(42, 45, 55)",
  "rgb(127, 179, 225)",
  "rgb(221, 162, 246)",
  "rgb(138, 241, 234)",
];
Bubble.SIZE = ['big', 'medium', 'small', 'tiny'];
Bubble.MAX_HEIGHTS = [100, 200, 275, 300]
Bubble.RADII = [75, 50, 25, 10];
Bubble.SPEED = 1;
Bubble.INIT_POS = [600, 600]