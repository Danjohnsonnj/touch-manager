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
eval("\n\nvar _touchClass = __webpack_require__(/*! ./touch-class */ \"./src/touch-class.js\");\n\nvar _touchClass2 = _interopRequireDefault(_touchClass);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar touchRegion = document.getElementById('TouchRegion');\nvar touchManager = new _touchClass2.default(touchRegion);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/touch-class.js":
/*!****************************!*\
  !*** ./src/touch-class.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TouchManager = function () {\n  function TouchManager(target) {\n    _classCallCheck(this, TouchManager);\n\n    // TODO: validate\n    this.target = target;\n    this.touches = {};\n\n    // TODO: update Babel for class properties plugin\n    this.handleTouch = this.unboundHandleTouch.bind(this);\n\n    this.bindTarget();\n  }\n\n  _createClass(TouchManager, [{\n    key: 'bindTarget',\n    value: function bindTarget() {\n      this.target.addEventListener('touchstart', this.handleTouch);\n      this.target.addEventListener('touchmove', this.handleTouch);\n      this.target.addEventListener('touchend', this.handleTouch);\n      this.target.addEventListener('touchcancel', this.handleTouch);\n    }\n  }, {\n    key: 'unboundHandleTouch',\n    value: function unboundHandleTouch(evt) {\n      var _this = this;\n\n      var type = evt.type;\n      var newTouches = Array.from(evt.changedTouches);\n      var unchangedTouches = Object.keys(this.touches).filter(function (t) {\n        t = parseInt(t, 10);\n        return !newTouches.find(function (n) {\n          return n.identifier === t;\n        });\n      });\n\n      switch (type) {\n        case 'touchstart':\n          console.log('start');\n\n          newTouches.forEach(function (t) {\n            _this.addTouch(t);\n            _this.addTouchDot(_this.touches[t.identifier]);\n          });\n\n          console.log(this.touches);\n          break;\n\n        case 'touchmove':\n          console.log('move');\n\n          newTouches.forEach(function (t) {\n            return _this.updateTouch(t);\n          });\n          unchangedTouches.forEach(function (t) {\n            return _this.becalm(t);\n          });\n\n          console.log(this.touches);\n          break;\n\n        case 'touchend':\n          console.log('end');\n\n          this.removeTouches(newTouches.map(function (t) {\n            return t.identifier;\n          }));\n          newTouches.forEach(function (t) {\n            return _this.removeTouchDot(t.identifier);\n          });\n\n          console.log(this.touches);\n          break;\n\n        case 'touchcancel':\n          console.log('CANCELLING');\n\n          this.removeTouches(Object.keys(this.touches));\n\n          break;\n      }\n\n      // console.log(this.touches)\n    }\n  }, {\n    key: 'addTouch',\n    value: function addTouch(touch) {\n      this.touches[touch.identifier] = {\n        id: touch.identifier,\n        relativePosition: {\n          x: touch.clientX,\n          y: touch.clientY\n        },\n        movement: {\n          vertical: null,\n          horizontal: null\n        }\n      };\n    }\n  }, {\n    key: 'updateTouch',\n    value: function updateTouch(touch) {\n      var touchReference = this.touches[touch.identifier];\n      var _touchReference$relat = touchReference.relativePosition,\n          x = _touchReference$relat.x,\n          y = _touchReference$relat.y;\n\n      this.touches[touch.identifier] = {\n        relativePosition: {\n          x: touch.clientX,\n          y: touch.clientY\n        },\n        movement: {\n          horizontal: touch.clientX - x,\n          vertical: touch.clientY - y\n        }\n      };\n    }\n  }, {\n    key: 'becalm',\n    value: function becalm(touchId) {\n      var touchReference = this.touches[touchId];\n      touchReference.movement = { horizontal: null, vertical: null };\n    }\n  }, {\n    key: 'removeTouches',\n    value: function removeTouches(touchIds) {\n      var _this2 = this;\n\n      touchIds.forEach(function (id) {\n        delete _this2.touches[id];\n      });\n    }\n\n    //////\n    // TODO: expose hooks\n    // tap\n    // multitap\n    // swipe (with number of touches)\n    // pinch\n    // zoom\n    // rotate\n\n    //////\n\n  }, {\n    key: 'addTouchDot',\n    value: function addTouchDot(t) {\n      var dot = document.createElement('div');\n      dot.classList.add('dot');\n      dot.dataset.id = 'dot-' + t.id;\n      dot.style.left = t.relativePosition.x + 'px';\n      dot.style.top = t.relativePosition.y + 'px';\n      this.target.appendChild(dot);\n    }\n  }, {\n    key: 'removeTouchDot',\n    value: function removeTouchDot(tId) {\n      var dot = this.target.querySelector('.dot[data-id=\"dot-' + tId + '\"]');\n      this.target.removeChild(dot);\n    }\n  }]);\n\n  return TouchManager;\n}();\n\nexports.default = TouchManager;\n\n//# sourceURL=webpack:///./src/touch-class.js?");

/***/ })

/******/ });