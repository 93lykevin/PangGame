// import Level from './level';
//Game holds my current level. 
// ==> Level should hold platforms & spawn bubbles? Or should I have game 
// hold all my bubbles for a given lavel and just spawn based on what level we're on

import MovingObject from './moving_object';
import Bubble from './bubble';

export default class Pang {
  constructor(){
    this.bubbles = [];
    this.player = [];
    this.bullets = [];

    this.addBubbles();
  }

  add(object) {
    if (object instanceof Bubble) {
      this.bubbles.push(object)
    } else {
      throw new Error("Unknown type of object")
    }
  }

  addBubbles() {
    for (let i = 0; i < Pang.NUM_BUBBLES; i++) {
      this.add(new Bubble({ pang: this }))
    }
  }

  allObjects() {
    return [].concat(this.bubbles)
  }

  bounce(pos, vel, radius) {
    if ((pos[0]+radius) >= Pang.DIM_X || (pos[0]-radius) <= 0) {
      vel[0] *= -1
    } 
    else if ((pos[1]+radius) >= Pang.DIM_Y || (pos[1]-radius) <= 0){
      vel[1] *=-1
    }
    return vel;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Pang.DIM_X, Pang.DIM_Y);

    ctx.fillStyle = Pang.BG_Color;

    ctx.clearRect(0, 0, Pang.DIM_X, Pang.DIM_Y);

    this.allObjects().forEach(object => {
      object.draw(ctx)
    });
  }

  moveObjects() {
    this.allObjects().forEach(object => {
      object.move()
    })
  }

  randomPosition() {
    return[ Pang.DIM_X * Math.random(), Pang.DIM_Y * Math.random() ]
  }
}

Pang.BG_Color = '#000000'
Pang.DIM_X = 1200;
Pang.DIM_Y = 800;
Pang.FPS = 60;
Pang.NUM_BUBBLES = 3;