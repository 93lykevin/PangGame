// import Level from './level';
//Game holds my current level. 
// ==> Level should hold platforms & spawn bubbles? Or should I have game 
// hold all my bubbles for a given lavel and just spawn based on what level we're on
import Bubble from './bubble';
import Player from './player';
import Bullet from './bullet';

export default class Pang {
  constructor(){
    this.bubbles = [];
    this.players = [];
    this.bullets = [];

    this.addBubbles();
  }

  add(object) {
    if (object instanceof Bubble) {
      this.bubbles.push(object)
    } else if (object instanceof Player) {
      this.players.push(object)
    } else if (object instanceof Bullet) {
      this.bullets.push(object)
    } else {
      throw new Error("Unknown type of object")
    }
  }

  addBubbles() {
    for (let i = 0; i < Pang.NUM_BUBBLES; i++) {
      this.add(new Bubble({ pang: this }))
    }
  }

  addPlayer() {
    const player = new Player({ 
      pang: this,
      pos: [Pang.DIM_X/2, Pang.DIM_Y - 100] 
    })
    this.add(player);
    
    return player;
  }

  allObjects() {
    return [].concat(this.bubbles, this.players, this.bullets)
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

  checkCollisions() {
    const allObjects = this.allObjects();
    allObjects.forEach(object => {
      for ( let i = 0; i < allObjects.length; i++ ) {
        for ( let j = 0; j < allObjects.length; j++) {
          const obj1 = allObjects[i];
          const obj2 = allObjects[j];
          if (obj1.isCollidedWith(obj2) && (obj1 !== obj2)) {
            console.log('collided')
          }
        }
      }
    })
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Pang.DIM_X, Pang.DIM_Y);
    ctx.fillStyle = Pang.BG_Color;
    ctx.clearRect(0, 0, Pang.DIM_X, Pang.DIM_Y);
    this.allObjects().forEach(object => {
      object.draw(ctx)
    })
  }

  moveObjects() {
    this.allObjects().forEach(object => {
      if (object instanceof Player ){
        object.movePlayer()
      } else {
        object.move()
      }
    })
  }

  randomPosition() {
    return[100 + (1000 * Math.random()), 125 ]
  }

  remove(object) {
    if (object instanceof Bubble) {
      this.bubbles.splice(this.bubbles.indexOf(object), 1);
    } //else if (object instanceof Player) {
    //   this.players.splice(this.players.index(object), 1);
    // } else if (object instanceof Bullet) {
    //   this.bullets.splice(this.bullets.index(object), 1);
    // } 
  }

  step() {
    this.moveObjects();
    this.checkCollisions();
  }
}

Pang.BG_Color = '#000000'
Pang.DIM_X = 1200;
Pang.DIM_Y = 800;
Pang.FPS = 60;
Pang.NUM_BUBBLES = 3;