/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bubble.js":
/*!***********************!*\
  !*** ./src/bubble.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bubble; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\nclass Bubble extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options = {}) {\n\n    options.color = Bubble.COLORS[Math.floor(Math.random() * Bubble.COLORS.length)];\n    options.radius = Bubble.RADIUS;\n    options.pos = options.pos || options.pang.randomPosition(); // Bubbles may not have random positions. Maybe render the bubble position based on the levels.\n    options.vel = options.vel || _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].randomVec(Bubble.SPEED);   // Need to change Util.randomVec(Bubble.SPEED). Or not... only change if I want Bubble to spawn with set directions\n    super(options);\n    options.isBounceable = true;\n  }\n}\n\n\n// const blk = rgb(42, 45, 55);\n// const lb = rgb(127, 179, 225);\n// const lp = rgb(221, 162, 246);\n// const lg = rgb(138, 241, 234);\n\nBubble.COLORS = ['black', 'blue', 'green', 'purple', 'red'];\nBubble.RADIUS = 75;\nBubble.RADII = [75, 50, 25, 10];\nBubble.SPEED = 5;\n\n\n//# sourceURL=webpack:///./src/bubble.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\nclass GameView{\n  constructor(pang, ctx){\n    this.ctx = ctx;\n    this.pang = pang;\n    // this.player = add.player();\n  }\n\n  start() {\n    setInterval(() => {\n      this.pang.moveObjects(),\n      this.pang.draw(this.ctx)\n    }, 20)\n  };\n}\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pang */ \"./src/pang.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n// import GameView from './game_view';\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  \n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext(\"2d\");\n  canvas.width = _pang__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_X;\n  canvas.height = _pang__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_Y;\n  \n  const pang = new _pang__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  new _game_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"](pang, ctx).start();\n  // const mo = new MovingObject({pos: [75, 75], radius: 20, vel: [5, 1], color: 'blue', game: true, isBounceable: true});\n  // const mo2 = new MovingObject({pos: [500, 350], radius: 35, vel: [5, 1], color: 'blue', game: true, isBounceable: true});\n  // const b1 = new Bubble({ pos: [200, 200] });\n  // mo.draw(ctx);\n  // mo2.draw(ctx);\n  // b1.draw(ctx);\n  \n  console.log(\"webpack is workingggg\")\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovingObject; });\nclass MovingObject {\n  constructor(options){\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.pang = options.pang;\n    this.isBounceable = options.isBounceable;\n  }\n\n  draw(ctx){\n    ctx.beginPath();\n    ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true );\n    ctx.fillStyle = this.color;\n    ctx.fill();\n  }\n\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.vel = this.pang.bounce(this.pos, this.vel, this.radius)\n  }\n\n\n}\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/pang.js":
/*!*********************!*\
  !*** ./src/pang.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pang; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n// import Level from './level';\n//Game holds my current level. \n// ==> Level should hold platforms & spawn bubbles? Or should I have game \n// hold all my bubbles for a given lavel and just spawn based on what level we're on\n\n\n\n\nclass Pang {\n  constructor(){\n    this.bubbles = [];\n    this.player = [];\n    this.bullets = [];\n\n    this.addBubbles();\n  }\n\n  add(object) {\n    if (object instanceof _bubble__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.bubbles.push(object)\n    } else {\n      throw new Error(\"Unknown type of object\")\n    }\n  }\n\n  addBubbles() {\n    for (let i = 0; i < Pang.NUM_BUBBLES; i++) {\n      this.add(new _bubble__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pang: this }))\n    }\n  }\n\n  allObjects() {\n    return [].concat(this.bubbles)\n  }\n\n  bounce(pos, vel, radius) {\n    if ((pos[0]+radius) >= Pang.DIM_X || (pos[0]-radius) <= 0) {\n      vel[0] *= -1\n    } \n    else if ((pos[1]+radius) >= Pang.DIM_Y || (pos[1]-radius) <= 0){\n      vel[1] *=-1\n    }\n    return vel;\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, Pang.DIM_X, Pang.DIM_Y);\n\n    ctx.fillStyle = Pang.BG_Color;\n\n    ctx.clearRect(0, 0, Pang.DIM_X, Pang.DIM_Y);\n\n    this.allObjects().forEach(object => {\n      object.draw(ctx)\n    });\n  }\n\n  moveObjects() {\n    this.allObjects().forEach(object => {\n      object.move()\n    })\n  }\n\n  randomPosition() {\n    return[ Pang.DIM_X * Math.random(), Pang.DIM_Y * Math.random() ]\n  }\n}\n\nPang.BG_Color = '#000000'\nPang.DIM_X = 1200;\nPang.DIM_Y = 800;\nPang.FPS = 60;\nPang.NUM_BUBBLES = 3;\n\n//# sourceURL=webpack:///./src/pang.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Util = {\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale( [Math.sin(deg), Math.cos(deg)], length )\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });