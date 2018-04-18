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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Controllers/PomodoreController.ts":
/*!*******************************************!*\
  !*** ./Controllers/PomodoreController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar PomodoreController = (function () {\n    function PomodoreController(inputBreak, inputSession, pomodore) {\n        this.inputBreak = inputBreak;\n        this.inputSession = inputSession;\n        this.pomodore = pomodore;\n    }\n    PomodoreController.prototype.applyTimeValues = function () {\n        this.pomodore.setBreak(parseInt(this.inputBreak.value));\n        this.pomodore.setSession(parseInt(this.inputSession.value));\n        this.pomodore.timer.notify({\n            minutes: this.inputSession.value,\n            seconds: 60\n        });\n        return this;\n    };\n    return PomodoreController;\n}());\nexports.PomodoreController = PomodoreController;\n\n\n//# sourceURL=webpack:///./Controllers/PomodoreController.ts?");

/***/ }),

/***/ "./Mode.ts":
/*!*****************!*\
  !*** ./Mode.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Mode;\n(function (Mode) {\n    Mode[\"BREAK\"] = \"break\";\n    Mode[\"SESSION\"] = \"session\";\n})(Mode = exports.Mode || (exports.Mode = {}));\n\n\n//# sourceURL=webpack:///./Mode.ts?");

/***/ }),

/***/ "./Models/Pomodore.ts":
/*!****************************!*\
  !*** ./Models/Pomodore.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Mode_1 = __webpack_require__(/*! ../Mode */ \"./Mode.ts\");\nvar Pomodore = (function () {\n    function Pomodore(timer) {\n        this[\"break\"] = 5;\n        this.session = 25;\n        this.currentMode = Mode_1.Mode.SESSION;\n        this.timer = timer;\n        this.Observers = [];\n    }\n    Pomodore.prototype.attach = function (observer) {\n        this.Observers.push(observer);\n        return this;\n    };\n    Pomodore.prototype.detach = function (observer) {\n        this.Observers = this.Observers.filter(function (item) { return item !== observer; });\n        return this;\n    };\n    Pomodore.prototype.notify = function (data) {\n        this.Observers.forEach(function (observer) { return observer.update(data); });\n        return this;\n    };\n    Pomodore.prototype.setBreak = function (value) {\n        this[\"break\"] = value;\n        return this;\n    };\n    Pomodore.prototype.setSession = function (value) {\n        this.session = value;\n        return this;\n    };\n    Pomodore.prototype.play = function () {\n        this.timer.countDown(this[this.currentMode]);\n        return this;\n    };\n    return Pomodore;\n}());\nexports.Pomodore = Pomodore;\n\n\n//# sourceURL=webpack:///./Models/Pomodore.ts?");

/***/ }),

/***/ "./Models/Timer.ts":
/*!*************************!*\
  !*** ./Models/Timer.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Timer = (function () {\n    function Timer() {\n        this.Observers = [];\n        this.seconds = 60;\n    }\n    Timer.prototype.attach = function (observer) {\n        this.Observers.push(observer);\n        return this;\n    };\n    Timer.prototype.detach = function (observer) {\n        this.Observers = this.Observers.filter(function (item) { return item !== observer; });\n        return this;\n    };\n    Timer.prototype.notify = function (data) {\n        this.Observers.forEach(function (observer) { return observer.update(data); });\n        return this;\n    };\n    Timer.prototype.countDown = function (minutes) {\n        var _this = this;\n        if (this.timerId) {\n            clearInterval(this.timerId);\n            this.seconds = 60;\n        }\n        this.minutes = minutes;\n        this.notify({\n            minutes: this.minutes,\n            seconds: this.seconds\n        });\n        this.minutes--;\n        this.timerId = setInterval(function () {\n            _this.seconds--;\n            _this.notify({\n                minutes: _this.minutes,\n                seconds: _this.seconds\n            });\n            if (!_this.seconds && !_this.minutes) {\n                clearInterval(_this.timerId);\n                _this.playAlarm();\n            }\n            else if (!_this.seconds) {\n                _this.seconds = 60;\n                _this.minutes--;\n            }\n        }, 1000);\n        return this;\n    };\n    Timer.prototype.playAlarm = function () {\n        return this;\n    };\n    return Timer;\n}());\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack:///./Models/Timer.ts?");

/***/ }),

/***/ "./Views/TimerView.ts":
/*!****************************!*\
  !*** ./Views/TimerView.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar TimerView = (function () {\n    function TimerView(timerDisplay) {\n        this.timerDisplay = timerDisplay;\n    }\n    TimerView.prototype.update = function (time) {\n        var minutes = time.minutes.toString();\n        var seconds = time.seconds.toString();\n        if (seconds === \"60\")\n            seconds = \"00\";\n        if (seconds.length === 1)\n            seconds = \"0\" + seconds;\n        this.timerDisplay.innerHTML = minutes + \":\" + seconds;\n        return this;\n    };\n    return TimerView;\n}());\nexports.TimerView = TimerView;\n\n\n//# sourceURL=webpack:///./Views/TimerView.ts?");

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar TimerView_1 = __webpack_require__(/*! ./Views/TimerView */ \"./Views/TimerView.ts\");\nvar Timer_1 = __webpack_require__(/*! ./Models/Timer */ \"./Models/Timer.ts\");\nvar Pomodore_1 = __webpack_require__(/*! ./Models/Pomodore */ \"./Models/Pomodore.ts\");\nvar PomodoreController_1 = __webpack_require__(/*! ./Controllers/PomodoreController */ \"./Controllers/PomodoreController.ts\");\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n    var clock = document.querySelector(\"#timer p\");\n    var timerView = new TimerView_1.TimerView(clock);\n    var timer = new Timer_1.Timer;\n    var pomodore = new Pomodore_1.Pomodore(timer);\n    var inputBreak = document.querySelector('.break-time');\n    var inputSession = document.querySelector('.session-time');\n    var controller = new PomodoreController_1.PomodoreController(inputBreak, inputSession, pomodore);\n    timer.attach(timerView);\n    var applyButton = document.querySelector('.bt-apply');\n    applyButton.addEventListener('click', function (e) {\n        e.preventDefault();\n        pomodore.play();\n    });\n    inputSession.addEventListener(\"click\", function (e) {\n        controller.applyTimeValues();\n    });\n    inputSession.addEventListener(\"keyup\", function (e) {\n        controller.applyTimeValues();\n    });\n    inputBreak.addEventListener(\"click\", function (e) {\n        controller.applyTimeValues();\n    });\n    inputBreak.addEventListener(\"keyup\", function (e) {\n        controller.applyTimeValues();\n    });\n});\n\n\n//# sourceURL=webpack:///./main.ts?");

/***/ })

/******/ });