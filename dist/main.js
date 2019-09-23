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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _touchClass = __webpack_require__(/*! ./touch-class */ \"./src/touch-class.js\");\n\nvar _touchClass2 = _interopRequireDefault(_touchClass);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar touchRegion = document.getElementById('TouchRegion');\nwindow.touchManager = new _touchClass2.default(touchRegion);\n\n// window.touchManager.on('tap:start', addDot)\n// window.touchManager.on('tap:end', removeDot)\nwindow.touchManager.on('multitap:start', function (ts, remaining) {\n  var _this = this;\n\n  ts.forEach(function (t) {\n    addDot.call(_this, t);\n  });\n});\nwindow.touchManager.on('multitap:end', function (ts, remaining) {\n  var _this2 = this;\n\n  console.log(remaining);\n  ts.forEach(function (t) {\n    removeDot.call(_this2, t, remaining);\n  });\n});\n\nfunction addDot(t, remaining) {\n  var dot = document.createElement('div');\n  dot.classList.add('dot');\n  dot.dataset.id = 'dot-' + t.id;\n  dot.style.left = t.relativePosition.x + 'px';\n  dot.style.top = t.relativePosition.y + 'px';\n  this.target.appendChild(dot);\n}\n\nfunction removeDot(t, remaining) {\n  var tId = t.id;\n  var dot = this.target.querySelector('.dot[data-id=\"dot-' + tId + '\"]');\n  if (dot) {\n    this.target.removeChild(dot);\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/touch-class.js":
/*!****************************!*\
  !*** ./src/touch-class.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar PUBLIC_EVENTS = {\n  'tap:start': {\n    callbacks: []\n  },\n  'tap:end': {\n    callbacks: []\n  },\n  'multitap:start': {\n    callbacks: []\n  },\n  'multitap:end': {\n    callbacks: []\n  }\n};\n\nvar TouchManager = function () {\n  function TouchManager(target) {\n    _classCallCheck(this, TouchManager);\n\n    // TODO: validate\n    this.target = target;\n    this.touches = {};\n\n    // TODO: update Babel for class properties plugin\n    this._handleTouch = this._unboundHandleTouch.bind(this);\n\n    this._bindTarget();\n  }\n\n  _createClass(TouchManager, [{\n    key: '_bindTarget',\n    value: function _bindTarget() {\n      this.target.addEventListener('touchstart', this._handleTouch);\n      this.target.addEventListener('touchmove', this._handleTouch);\n      this.target.addEventListener('touchend', this._handleTouch);\n      this.target.addEventListener('touchcancel', this._handleTouch);\n    }\n  }, {\n    key: '_unboundHandleTouch',\n    value: function _unboundHandleTouch(evt) {\n      var _this = this;\n\n      var type = evt.type;\n      var newTouches = Array.from(evt.changedTouches);\n      var unchangedTouches = Object.keys(this.touches).filter(function (t) {\n        t = parseInt(t, 10);\n        return !newTouches.find(function (n) {\n          return n.identifier === t;\n        });\n      });\n\n      switch (type) {\n        case 'touchstart':\n          newTouches.forEach(function (t) {\n            _this._addTouch(t);\n\n            PUBLIC_EVENTS['tap:start'].callbacks.forEach(function (cb) {\n              cb.call(_this, _this.touches[t.identifier], Object.keys(_this.touches).length);\n            });\n          });\n\n          if (Object.keys(this.touches).length > 1) {\n            PUBLIC_EVENTS['multitap:start'].callbacks.forEach(function (cb) {\n              cb.call(_this, Object.values(_this.touches), Object.keys(_this.touches).length);\n            });\n          }\n\n          break;\n\n        case 'touchmove':\n          newTouches.forEach(function (t) {\n            return _this._updateTouch(t);\n          });\n          // newTouches.forEach(t => this.moveTouchDot(t.identifier))\n          unchangedTouches.forEach(function (t) {\n            return _this._becalm(t);\n          });\n\n          break;\n\n        case 'touchend':\n          newTouches.forEach(function (t) {\n            PUBLIC_EVENTS['tap:end'].callbacks.forEach(function (cb) {\n              cb.call(_this, _this.touches[t.identifier], Object.keys(_this.touches).length);\n            });\n          });\n\n          if (Object.keys(this.touches).length > 1) {\n            PUBLIC_EVENTS['multitap:end'].callbacks.forEach(function (cb) {\n              cb.call(_this, Object.values(_this.touches), Object.keys(_this.touches).length);\n            });\n          }\n\n          this._removeTouches(newTouches.map(function (t) {\n            return t;\n          }));\n\n          break;\n\n        case 'touchcancel':\n          this._removeTouches(Object.keys(this.touches));\n\n          break;\n      }\n    }\n  }, {\n    key: '_addTouch',\n    value: function _addTouch(touch) {\n      // console.log(touch.radiusX, touch.radiusY)\n      this.touches[touch.identifier] = {\n        id: touch.identifier,\n        relativePosition: {\n          x: touch.clientX,\n          y: touch.clientY\n        },\n        movement: {\n          vertical: null,\n          horizontal: null\n        }\n      };\n    }\n  }, {\n    key: '_updateTouch',\n    value: function _updateTouch(touch) {\n      var touchReference = this.touches[touch.identifier];\n      var _touchReference$relat = touchReference.relativePosition,\n          x = _touchReference$relat.x,\n          y = _touchReference$relat.y;\n\n      this.touches[touch.identifier].relativePosition = {\n        x: touch.clientX,\n        y: touch.clientY\n      };\n      this.touches[touch.identifier].movement = {\n        horizontal: touch.clientX - x,\n        vertical: touch.clientY - y\n      };\n    }\n  }, {\n    key: '_becalm',\n    value: function _becalm(touchId) {\n      var touchReference = this.touches[touchId];\n      touchReference.movement = { horizontal: null, vertical: null };\n    }\n  }, {\n    key: '_removeTouches',\n    value: function _removeTouches(touches) {\n      var _this2 = this;\n\n      touches.forEach(function (t) {\n        delete _this2.touches[t.identifier];\n      });\n    }\n\n    ///////\n\n  }, {\n    key: 'on',\n    value: function on(publicEvent, callback) {\n      var evt = Object.keys(PUBLIC_EVENTS).find(function (e) {\n        return e === publicEvent;\n      });\n      if (!evt) {\n        return new Error(publicEvent + ' is not an available event.');\n      }\n\n      PUBLIC_EVENTS[publicEvent].callbacks.push(callback);\n    }\n\n    //////\n    // TODO: expose hooks\n    // tap:start, tap:end\n    // multitap:start, multitap: end\n    // swipe (with number of touches)\n    // pinch\n    // zoom\n    // rotate\n\n    //////\n\n  }, {\n    key: 'moveTouchDot',\n    value: function moveTouchDot(tId) {\n      var dot = this.target.querySelector('.dot[data-id=\"dot-' + tId + '\"]');\n      var touch = this.touches[tId];\n      dot.style.top = parseInt(dot.style.top) + touch.movement.vertical + 'px';\n      dot.style.left = parseInt(dot.style.left) + touch.movement.horizontal + 'px';\n    }\n  }]);\n\n  return TouchManager;\n}();\n\nexports.default = TouchManager;\n\n//# sourceURL=webpack:///./src/touch-class.js?");

/***/ })

/******/ });