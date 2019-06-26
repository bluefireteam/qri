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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/engine/graphics.js":
/*!*****************************************!*\
  !*** ./node_modules/engine/graphics.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((ctx, palette, scaleFactor) => {\n  const s = v => v * scaleFactor\n\n  return ({\n    fill: (x, y, w, h, colorIdx) => {\n      ctx.fillStyle = palette[colorIdx]\n      ctx.fillRect(s(x), s(y), s(w), s(h))\n    }\n  })\n});\n\n\n//# sourceURL=webpack:///./node_modules/engine/graphics.js?");

/***/ }),

/***/ "./node_modules/engine/index.js":
/*!**************************************!*\
  !*** ./node_modules/engine/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphics */ \"./node_modules/engine/graphics.js\");\n\n\n// https://lospec.com/palette-list/dawnbringers-8-color\nconst defaultPalette = [\n  \"#000000\",\n  \"#55415f\",\n  \"#646964\",\n  \"#d77355\",\n  \"#508cd7\",\n  \"#64b964\",\n  \"#e6c86e\",\n  \"#dcf5ff\"\n]\n\nconst now = () => new Date().getTime();\n\nconst evalGame = game => {\n  eval.call({}, game);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (( scaleFactor, canvas, palette = defaultPalette) => {\n  let running = true;\n\n  return ({\n    unload: () => {\n      running = false\n    },\n    ondPadDown: key => {\n      if (dpadDown) dpadDown(key);\n    },\n    ondPadUp: key => {\n      if (dpadUp) dpadUp(key);\n    },\n    loadGame: gameData => {\n      evalGame(gameData);\n      const ctx = canvas.getContext(\"2d\")\n      const graphics = Object(_graphics__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ctx, palette, scaleFactor)\n\n      let time = now();\n\n      const tick = () => {\n        graphics.fill(0, 0, 160, 160, 0)\n        const tickTime = now();\n        const delta = tickTime - time;\n        time = tickTime;\n\n        if (update) update(delta)\n        if (render) render(graphics)\n\n        if (running) {\n          requestAnimationFrame(tick);\n        }\n      }\n\n      tick();\n    }\n  })\n});\n\n\n//# sourceURL=webpack:///./node_modules/engine/index.js?");

/***/ }),

/***/ "./src/emulator.js":
/*!*************************!*\
  !*** ./src/emulator.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine */ \"./node_modules/engine/index.js\");\n\n\nvar ipc = __webpack_require__(/*! electron */ \"electron\").ipcRenderer;\n\nipc.on(\"loadGame\", function (event, message) {\n  Console.start(message);\n});\nvar Console = {\n  start: function start(gameData) {\n    var canvasParent = document.querySelector(\"body\");\n    var height = canvasParent.offsetHeight - canvasParent.offsetHeight * 0.2;\n    var width = height;\n    var canvas = document.getElementById(\"game-screen\");\n    canvas.width = width;\n    canvas.height = height;\n    var ctx = canvas.getContext(\"2d\");\n    ctx.fillStyle = \"#000\";\n    ctx.fillRect(0, 0, width, height);\n    var scaleFactor = width / 160;\n    var engine = Object(engine__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(scaleFactor, canvas);\n    engine.loadGame(gameData);\n    document.addEventListener(\"keydown\", function (evt) {\n      if (evt.key == \"w\" || evt.key == \"ArrowUp\") {\n        dpadDown(\"UP\");\n      }\n\n      if (evt.key == \"s\" || evt.key == \"ArrowDown\") {\n        dpadDown(\"DOWN\");\n      }\n\n      if (evt.key == \"a\" || evt.key == \"ArrowLeft\") {\n        dpadDown(\"LEFT\");\n      }\n\n      if (evt.key == \"d\" || evt.key == \"ArrowRight\") {\n        dpadDown(\"RIGHT\");\n      }\n    });\n    document.addEventListener(\"keyup\", function (evt) {\n      if (evt.key == \"w\" || evt.key == \"ArrowUp\") {\n        dpadUp(\"UP\");\n      }\n\n      if (evt.key == \"s\" || evt.key == \"ArrowDown\") {\n        dpadUp(\"DOWN\");\n      }\n\n      if (evt.key == \"a\" || evt.key == \"ArrowLeft\") {\n        dpadUp(\"LEFT\");\n      }\n\n      if (evt.key == \"d\" || evt.key == \"ArrowRight\") {\n        dpadUp(\"RIGHT\");\n      }\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/emulator.js?");

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** multi ./src/emulator.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/emulator.js */\"./src/emulator.js\");\n\n\n//# sourceURL=webpack:///multi_./src/emulator.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ })

/******/ });