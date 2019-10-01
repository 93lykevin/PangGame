import MovingObject from './moving_object';
import Util from './utils';


export default class Bubble extends MovingObject {
  constructor(options = {}) {

    options.color = Bubble.COLORS[Math.floor(Math.random() * Bubble.COLORS.length)];
    options.radius = Bubble.RADIUS;
    options.pos = options.pos || options.pang.randomPosition(); // Bubbles may not have random positions. Maybe render the bubble position based on the levels.
    options.vel = options.vel || Util.randomVec(Bubble.SPEED);   // Need to change Util.randomVec(Bubble.SPEED). Or not... only change if I want Bubble to spawn with set directions
    super(options);
    options.isBounceable = true;
  }
}


// const blk = rgb(42, 45, 55);
// const lb = rgb(127, 179, 225);
// const lp = rgb(221, 162, 246);
// const lg = rgb(138, 241, 234);

Bubble.COLORS = ['black', 'blue', 'green', 'purple', 'red'];
Bubble.RADIUS = 75;
Bubble.RADII = [75, 50, 25, 10];
Bubble.SPEED = 5;
