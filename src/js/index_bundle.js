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

/***/ "./src/js/abstractView.js":
/*!********************************!*\
  !*** ./src/js/abstractView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n    constructor(params) {\n        this.params = params;\n    }\n\n    setTitle(title) {\n        document.title = title;\n    }\n\n    async getHtml() {\n        return \"\";\n    }\n});\n\n//# sourceURL=webpack://comics-app/./src/js/abstractView.js?");

/***/ }),

/***/ "./src/js/comicsView.js":
/*!******************************!*\
  !*** ./src/js/comicsView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ComicsView)\n/* harmony export */ });\n/* harmony import */ var _abstractView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractView.js */ \"./src/js/abstractView.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch */ \"./src/js/fetch.js\");\n\n\n\n\n\nclass ComicsView extends _abstractView_js__WEBPACK_IMPORTED_MODULE_0__.default {\n    \n    constructor(params) {\n        super(params);\n        this.setTitle(\"Dashboard\");\n    }\n\n    async getMax(){\n        return (0,_fetch__WEBPACK_IMPORTED_MODULE_2__.fetchJson)((0,_fetch__WEBPACK_IMPORTED_MODULE_2__.getRequestUrl)({})).then(data => {\n            return data.num;\n        });\n    }\n    async getObject(){\n        return (0,_fetch__WEBPACK_IMPORTED_MODULE_2__.fetchJson)((0,_fetch__WEBPACK_IMPORTED_MODULE_2__.getRequestUrl)(this.params));\n    }\n\n\n    async getHtml() {\n        let max = await this.getMax();\n        let data = await this.getObject();\n        let date = new Date(data.year, data.month - 1, data.day).toLocaleDateString();\n        return `\n            <div class=\"comicsCard\">\n                <div class=\"info\">\n                    <div class=\"title\">${data.safe_title}</div>\n                    <div class=\"date\">${date}</div>\n                </div>\n                <div class=\"navigate_comics\">\n                    <a class=\"navigation_comics_button toFirst\" href=\"/1\">First</a>\n                    <a class=\"navigation_comics_button toPrev\" href=\"/${Math.max(1, data.num - 1)}\">Prev</a>\n                    <a class=\"navigation_comics_button toRandom\" href=\"${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomIntInclusive)(1, max)}\">Random</a>\n                    <a class=\"navigation_comics_button toNext\" href=\"/${Math.min(max, data.num + 1)}\">Next</a>\n                    <a class=\"navigation_comics_button toCurrent\" href=\"/\">Current</a>\n                </div>\n                <div class=\"comicsItem\">\n                    <img class=\"responsive_image\" src=\"${data.img}\" alt=\"${data.alt}\" title=\"${data.alt}\"/>\n                </div>\n            </div>\n            <div class=\"copyInfo_container\">\n                <p class=\"permanentLink\">Permanent link to this comic: ${location.protocol}//${location.host}/${data.num}</p>\n                <p class=\"permanentLink\">Image URL (for hotlinking/embedding): ${data.img}</p>           \n            </div>`;        \n    }\n}\n\n\n\n//# sourceURL=webpack://comics-app/./src/js/comicsView.js?");

/***/ }),

/***/ "./src/js/fetch.js":
/*!*************************!*\
  !*** ./src/js/fetch.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRequestUrl\": () => (/* binding */ getRequestUrl),\n/* harmony export */   \"fetchJson\": () => (/* binding */ fetchJson)\n/* harmony export */ });\nconst BASEURL = 'https://xkcd.com/';\n//const BASEURL = 'http://localhost:3002/';\nconst PROXY_URL = 'https://cors-anywhere.herokuapp.com/';\nconst PROXY = true;\n\nfunction getRequestUrl(params){\n    let urlToReturn;\n    if (!params.id){\n        urlToReturn = BASEURL + 'info.0.json';\n    }\n    else {\n        urlToReturn = BASEURL + params.id + '/info.0.json';\n    }\n    return PROXY? PROXY_URL + urlToReturn : urlToReturn;\n}\n\nasync function fetchJson(url){       \n    return fetch(url)\n        .then((response) => {\n            return response.json();\n        })\n        .catch((error) => {\n            console.log(error);\n        });\n}\n\n//# sourceURL=webpack://comics-app/./src/js/fetch.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _comicsView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comicsView */ \"./src/js/comicsView.js\");\n\n\nconst pathToRegex = path => new RegExp(\"^\" + path.replace(/\\//g, \"\\\\/\").replace(/:\\w+/g, \"(.+)\") + \"$\");\n\nconst router = async () => {\n    const routes = [\n        { path: \"/\", view: _comicsView__WEBPACK_IMPORTED_MODULE_0__.default },\n        { path: \"/:id\", view: _comicsView__WEBPACK_IMPORTED_MODULE_0__.default }\n    ];\n\n    const potentialMatches = routes.map(route => {\n        return {\n            route,\n            result: location.pathname.match(pathToRegex(route.path))\n        };\n    });\n\n    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);\n\n    /* Route not found - return first route OR a specific \"not-found\" route */\n    if (!match) {\n        match = {\n            route: routes[0],\n            result: [location.pathname]\n        };\n    }\n\n    console.log(match);\n\n    const view = new match.route.view(getParams(match));\n    document.querySelector(\"#root\").innerHTML = await view.getHtml();\n}\n\nconst navigateTo = url => {\n    history.pushState(null, null, url);\n    router();\n};\n\nconst getParams = match => {\n    const values = match.result.slice(1);\n    const keys = Array.from(match.route.path.matchAll(/:(\\w+)/g)).map(result => result[1]);\n\n    return Object.fromEntries(keys.map((key, i) => {\n        return [key, values[i]];\n    }));\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    document.body.addEventListener(\"click\", e => {\n        if (e.target.matches(\"[data-link]\")) {\n            e.preventDefault();\n            navigateTo(e.target.href);\n        }\n    });\n\n    /* Document has loaded -  run the router! */\n    router();\n});\n\nwindow.addEventListener(\"popstate\", router);\n\n\n\n//# sourceURL=webpack://comics-app/./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomIntInclusive\": () => (/* binding */ getRandomIntInclusive)\n/* harmony export */ });\nfunction getRandomIntInclusive(min, max) {\n        min = Math.ceil(min);\n        max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min + 1)) + min; \n}\n\n//# sourceURL=webpack://comics-app/./src/js/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;