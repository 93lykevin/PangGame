import Pang from './pang';
// import GameView from './game_view';
import MovingObject from './moving_object';
import Bubble from './bubble';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
  
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext("2d");
  canvas.width = Pang.DIM_X;
  canvas.height = Pang.DIM_Y;
  
  const pang = new Pang();
  new GameView(pang, ctx).start();
  // const mo = new MovingObject({pos: [75, 75], radius: 20, vel: [5, 1], color: 'blue', game: true, isBounceable: true});
  // const mo2 = new MovingObject({pos: [500, 350], radius: 35, vel: [5, 1], color: 'blue', game: true, isBounceable: true});
  // const b1 = new Bubble({ pos: [200, 200] });
  // mo.draw(ctx);
  // mo2.draw(ctx);
  // b1.draw(ctx);
  
  console.log("webpack is workingggg")
})

