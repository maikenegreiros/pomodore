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
eval("\nexports.__esModule = true;\nvar TimerView_1 = __webpack_require__(/*! ../Views/TimerView */ \"./Views/TimerView.ts\");\nvar PomodoreView_1 = __webpack_require__(/*! ../Views/PomodoreView */ \"./Views/PomodoreView.ts\");\nvar Timer_1 = __webpack_require__(/*! ../Models/Timer */ \"./Models/Timer.ts\");\nvar Pomodore_1 = __webpack_require__(/*! ../Models/Pomodore */ \"./Models/Pomodore.ts\");\nvar PomodoreController = (function () {\n    function PomodoreController() {\n    }\n    PomodoreController.prototype.init = function () {\n        var display = document.querySelector(\"#timer\");\n        var clock = document.querySelector(\"#timer p\");\n        var timerTitle = document.querySelector(\".timer-type\");\n        var button = document.querySelector(\".bt-apply\");\n        var timerView = new TimerView_1.TimerView(display, clock, button);\n        var pomodoreView = new PomodoreView_1.PomodoreView(timerTitle, display);\n        var timerSession = new Timer_1.Timer;\n        var timerBreak = new Timer_1.Timer;\n        var pomodore = new Pomodore_1.Pomodore(timerSession, timerBreak, timerView);\n        pomodore.attach(pomodoreView);\n        timerSession.attach(timerView);\n        timerBreak.attach(timerView);\n        var inputBreak = document.querySelector('.break-time');\n        var inputSession = document.querySelector('.session-time');\n        timerSession.setTime(parseInt(inputSession.value));\n        timerBreak.setTime(parseInt(inputBreak.value));\n        pomodore.play();\n    };\n    return PomodoreController;\n}());\nexports.PomodoreController = PomodoreController;\n\n\n//# sourceURL=webpack:///./Controllers/PomodoreController.ts?");

/***/ }),

/***/ "./Mode.ts":
/*!*****************!*\
  !*** ./Mode.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Mode;\n(function (Mode) {\n    Mode[\"BREAK\"] = \"Break\";\n    Mode[\"SESSION\"] = \"Session\";\n})(Mode = exports.Mode || (exports.Mode = {}));\n\n\n//# sourceURL=webpack:///./Mode.ts?");

/***/ }),

/***/ "./Models/Pomodore.ts":
/*!****************************!*\
  !*** ./Models/Pomodore.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Mode_1 = __webpack_require__(/*! ../Mode */ \"./Mode.ts\");\nvar Pomodore = (function () {\n    function Pomodore(timerSession, timerBreak, timerView) {\n        this.timesPlayed = 0;\n        this.currentMode = Mode_1.Mode.BREAK;\n        this.timerSession = timerSession;\n        this.timerView = timerView;\n        this.timerBreak = timerBreak;\n        this.Observers = [];\n    }\n    Pomodore.prototype.attach = function (observer) {\n        this.Observers.push(observer);\n        return this;\n    };\n    Pomodore.prototype.detach = function (observer) {\n        this.Observers = this.Observers.filter(function (item) { return item !== observer; });\n        return this;\n    };\n    Pomodore.prototype.notify = function (data) {\n        this.Observers.forEach(function (observer) { return observer.update(data); });\n        return this;\n    };\n    Pomodore.prototype.update = function (data) {\n        if (!data.minutes && !data.seconds && this.timesPlayed < 1) {\n            this.play();\n            this.timesPlayed++;\n        }\n        return this;\n    };\n    Pomodore.prototype.alternateTimers = function () {\n        if (this.currentMode === Mode_1.Mode.SESSION) {\n            this.currentMode = Mode_1.Mode.BREAK;\n            this.notify(this.currentMode);\n            this.timerBreak.attach(this);\n            this.timerSession.detach(this);\n        }\n        else {\n            this.currentMode = Mode_1.Mode.SESSION;\n            this.notify(this.currentMode);\n            this.timerSession.attach(this);\n            this.timerBreak.detach(this);\n        }\n        return this;\n    };\n    Pomodore.prototype.play = function () {\n        this.alternateTimers();\n        if (this.currentMode === Mode_1.Mode.SESSION) {\n            this.timerSession.countDown();\n            this.timerSession.attach(this.timerView);\n            this.timerBreak.detach(this.timerView);\n        }\n        else {\n            this.timerBreak.countDown();\n            this.timerBreak.attach(this.timerView);\n            this.timerSession.detach(this.timerView);\n        }\n        return this;\n    };\n    return Pomodore;\n}());\nexports.Pomodore = Pomodore;\n\n\n//# sourceURL=webpack:///./Models/Pomodore.ts?");

/***/ }),

/***/ "./Models/Timer.ts":
/*!*************************!*\
  !*** ./Models/Timer.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Timer = (function () {\n    function Timer() {\n        this.Observers = [];\n        this.seconds = 60;\n    }\n    Timer.prototype.attach = function (observer) {\n        this.Observers.push(observer);\n        return this;\n    };\n    Timer.prototype.detach = function (observer) {\n        this.Observers = this.Observers.filter(function (item) { return item !== observer; });\n        return this;\n    };\n    Timer.prototype.notify = function (data) {\n        this.Observers.forEach(function (observer) { return observer.update(data); });\n        return this;\n    };\n    Timer.prototype.setTime = function (minutes) {\n        this.minutes = minutes;\n        return this;\n    };\n    Timer.prototype.countDown = function () {\n        var _this = this;\n        if (this.timerId) {\n            clearInterval(this.timerId);\n            this.seconds = 60;\n        }\n        this.notify({\n            minutes: this.minutes,\n            seconds: this.seconds\n        });\n        this.minutes--;\n        this.timerId = setInterval(function () {\n            _this.seconds--;\n            _this.notify({\n                minutes: _this.minutes,\n                seconds: _this.seconds\n            });\n            if (!_this.seconds && !_this.minutes) {\n                clearInterval(_this.timerId);\n                _this.notify({\n                    minutes: _this.minutes,\n                    seconds: _this.seconds\n                });\n            }\n            else if (!_this.seconds) {\n                _this.seconds = 60;\n                _this.minutes--;\n            }\n        }, 1000);\n        return this;\n    };\n    return Timer;\n}());\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack:///./Models/Timer.ts?");

/***/ }),

/***/ "./Views/PomodoreView.ts":
/*!*******************************!*\
  !*** ./Views/PomodoreView.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Mode_1 = __webpack_require__(/*! ../Mode */ \"./Mode.ts\");\nvar PomodoreView = (function () {\n    function PomodoreView(timerTitle, display) {\n        this.timerTitle = timerTitle;\n        this.display = display;\n    }\n    PomodoreView.prototype.update = function (title) {\n        this.timerTitle.innerHTML = title;\n        if (title === Mode_1.Mode.SESSION) {\n            this.timerTitle.classList.add(\"title-session\");\n            this.timerTitle.classList.remove(\"title-break\");\n            this.display.classList.add(\"display-session\");\n            this.display.classList.remove(\"display-break\");\n        }\n        else {\n            this.timerTitle.classList.add(\"title-break\");\n            this.timerTitle.classList.remove(\"title-session\");\n            this.display.classList.add(\"display-break\");\n            this.display.classList.remove(\"display-session\");\n        }\n        return this;\n    };\n    return PomodoreView;\n}());\nexports.PomodoreView = PomodoreView;\n\n\n//# sourceURL=webpack:///./Views/PomodoreView.ts?");

/***/ }),

/***/ "./Views/TimerView.ts":
/*!****************************!*\
  !*** ./Views/TimerView.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar TimerView = (function () {\n    function TimerView(timerDisplay, time, button) {\n        this.timerDisplay = timerDisplay;\n        this.time = time;\n        this.button = button;\n    }\n    TimerView.prototype.update = function (time) {\n        var minutes = time.minutes.toString();\n        var seconds = time.seconds.toString();\n        if (seconds === \"60\")\n            seconds = \"00\";\n        if (seconds.length === 1)\n            seconds = \"0\" + seconds;\n        this.timerDisplay.innerHTML = minutes + \":\" + seconds;\n        if (time.minutes || time.seconds) {\n            this.button.disabled = true;\n        }\n        else {\n            this.button.disabled = false;\n        }\n        return this;\n    };\n    return TimerView;\n}());\nexports.TimerView = TimerView;\n\n\n//# sourceURL=webpack:///./Views/TimerView.ts?");

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar PomodoreController_1 = __webpack_require__(/*! ./Controllers/PomodoreController */ \"./Controllers/PomodoreController.ts\");\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n    var button = document.querySelector(\".bt-apply\");\n    button.addEventListener('click', function (e) {\n        e.preventDefault();\n        (new PomodoreController_1.PomodoreController).init();\n    });\n});\n\n\n//# sourceURL=webpack:///./main.ts?");

/***/ })

/******/ });