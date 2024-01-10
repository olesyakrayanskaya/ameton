/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/main.scss */ \"./src/main.scss\");\n/* harmony import */ var _src_js_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/js/slider */ \"./src/js/slider.js\");\n/* harmony import */ var _src_js_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_js_slider__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/index.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("\n\nconst btnRight = document.querySelector('.faq__btn_right');\nconst btnLeft = document.querySelector('.faq__btn_left');\nconst slider = document.querySelector('.faq__slider');\nconst slides = document.querySelectorAll('.slide');\nconst slide = document.querySelector('.slide');\nconst slideWidth = slide.offsetWidth;\nlet slideMrg = 24;\nconst slidesCount = slides.length;\nlet visibleSlidesCount = 4;\nlet clicks = 0;\nconst md = window.matchMedia('(max-width: 967px)');\nif (md.matches) {\n  visibleSlidesCount = 3;\n}\nconst sm = window.matchMedia('(max-width: 670px)');\nif (sm.matches) {\n  visibleSlidesCount = 2;\n  slideMrg = 12;\n}\nconst xsm = window.matchMedia('(max-width: 480px)');\nif (xsm.matches) {\n  visibleSlidesCount = 1;\n  slideMrg = 0;\n}\nbtnRight.addEventListener('click', () => {\n  if (clicks < slidesCount - visibleSlidesCount) {\n    clicks += 1;\n    slider.style.transform = `translateX(${-(slideWidth + slideMrg) * clicks}px)`;\n  }\n  if (clicks >= slidesCount - visibleSlidesCount) {\n    btnRight.style.opacity = 0;\n  }\n  btnLeft.style.opacity = 1;\n});\nbtnLeft.addEventListener('click', () => {\n  if (clicks > 0) {\n    clicks -= 1;\n    slider.style.transform = `translateX(${-(slideWidth + slideMrg) * clicks}px)`;\n  }\n  if (clicks <= 0) {\n    btnLeft.style.opacity = 0;\n  }\n  btnRight.style.opacity = 1;\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/slider.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;