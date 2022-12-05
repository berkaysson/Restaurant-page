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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\r\n    const home = document.createElement(\"div\");\r\n    home.setAttribute(\"id\", \"home\");\r\n\r\n    const hero_container = document.createElement(\"div\");\r\n\r\n    const hero = document.createElement(\"h2\");\r\n    hero.textContent = \"Coffee for Life\";\r\n\r\n    const hero_sl = document.createElement(\"h3\");\r\n    hero_sl.textContent = \"Best Coffee\";\r\n\r\n    const order_button = document.createElement(\"button\");\r\n    order_button.textContent = \"Order Now\";\r\n    order_button.setAttribute(\"class\", \"btn\");\r\n    \r\n    hero_container.appendChild(hero);\r\n    hero_container.appendChild(hero_sl);\r\n    hero_container.appendChild(order_button);\r\n    hero_container.setAttribute(\"class\", \"hero\");\r\n\r\n    const info_container = document.createElement(\"div\");\r\n\r\n    const adress_container = document.createElement(\"div\");\r\n\r\n    const adress_icon = document.createElement(\"i\");\r\n    adress_icon.setAttribute(\"class\", \"fa-solid fa-location-dot\"); \r\n    \r\n    const adress = document.createElement(\"p\");\r\n    adress.textContent = \"38 Park Row, New York, NY 10038\";\r\n\r\n    adress_container.appendChild(adress_icon);\r\n    adress_container.appendChild(adress);\r\n\r\n    const time_container = document.createElement(\"div\");\r\n\r\n    const time_icon = document.createElement(\"i\");\r\n    time_icon.setAttribute(\"class\", \"fa-solid fa-clock\"); \r\n    \r\n    const time = document.createElement(\"p\");\r\n    time.textContent = \"Mon-Thurs:8am-8pm / Fri-Sun:8am-11pm\";\r\n\r\n    time_container.appendChild(time_icon);\r\n    time_container.appendChild(time);\r\n\r\n    info_container.appendChild(adress_container);\r\n    info_container.appendChild(time_container);\r\n    info_container.setAttribute(\"class\", \"info\");\r\n\r\n    home.appendChild(hero_container);\r\n    home.appendChild(info_container);\r\n\r\n    return home;\r\n}\r\n\r\nfunction loadHome() {\r\n    const main = document.getElementById(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(createHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\nfunction createHeader() {\r\n    const header = document.createElement(\"header\");\r\n    \r\n    const title_header = document.createElement(\"h1\");\r\n    title_header.textContent = \"Restaurant Page\";\r\n\r\n    header.appendChild(title_header);\r\n    header.appendChild(createNavMenu());\r\n    \r\n    return header;\r\n}\r\n\r\nfunction createNavMenu() {\r\n    const nav_menu = document.createElement(\"nav\");\r\n\r\n    const home_button = document.createElement(\"a\");\r\n    home_button.textContent = \"Home\";\r\n\r\n    const menu_button = document.createElement(\"a\");\r\n    menu_button.textContent = \"Menu\";\r\n\r\n    const contact_button = document.createElement(\"a\");\r\n    contact_button.textContent = \"Contact\";\r\n\r\n    home_button.setAttribute(\"class\", \"page-link active\");\r\n    menu_button.setAttribute(\"class\", \"page-link\");\r\n    contact_button.setAttribute(\"class\", \"page-link\");\r\n\r\n    home_button.setAttribute(\"id\", \"Home\");\r\n    menu_button.setAttribute(\"id\", \"Menu\");\r\n    contact_button.setAttribute(\"id\", \"Contact\");\r\n\r\n    nav_menu.appendChild(home_button);\r\n    nav_menu.appendChild(menu_button);\r\n    nav_menu.appendChild(contact_button);\r\n    \r\n    return nav_menu\r\n}\r\n\r\nfunction createMain() {\r\n    const main = document.createElement(\"main\");\r\n    main.classList.add(\"main\");\r\n    main.setAttribute(\"id\", \"main\");\r\n    return main;\r\n}\r\n\r\n// function createFooter() {\r\n//     // add footer later\r\n//     // return footer;\r\n// };\r\n\r\nfunction activePage(link_ID) {\r\n    const page_links = document.querySelectorAll(\".page-link\");\r\n    page_links.forEach((link) => {\r\n        if (link_ID != link.id) {\r\n            link.classList.remove(\"active\");\r\n        }\r\n        else if (link_ID == link.id) {\r\n            link.classList.add(\"class\", \"active\");\r\n            if (link_ID == \"Home\") {\r\n                (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n            }\r\n\r\n            else if (link_ID == \"Menu\") {\r\n                (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n            }\r\n\r\n            else {\r\n                loadContact();\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\nfunction initWebsite(){\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.appendChild(createHeader());\r\n    content.appendChild(createMain());\r\n    // content.appendChild(createFooter());\r\n\r\n    document.querySelectorAll(\".page-link\").forEach((link) => {\r\n        link.addEventListener(\"click\",(e) => {\r\n            if(e.target.classList.contains(\"active\")) return;\r\n            activePage(e.target.textContent)\r\n        });\r\n    });\r\n\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n}\r\n\r\n\r\ninitWebsite()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\r\n    const menu = document.createElement(\"div\");\r\n    menu.setAttribute(\"id\", \"menu\");\r\n\r\n    menu.appendChild(createMenuItem(\"Caffè Americano\", \r\n    \"Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.\", \r\n    \"CaffèAmericano\"));\r\n\r\n    menu.appendChild(createMenuItem(\"Veranda Blend\", \r\n    \"In Latin America, coffee farms are often run by families, with their own homes on the same​ land where their coffee grows. We’ve sipped coffee with these farmers for decades,​ sitting on their verandas, overlooking the lush beauty of the coffee trees rolling out in the​ distance. Most times it was a lightly roasted coffee like this one. It took us more than 80​ tries to get it right—mellow and flavorful with a nice softness.​\",\r\n     \"VerandaBlend\"));\r\n\r\n    menu.appendChild(createMenuItem(\"Espresso\",\r\n     \"Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.\", \r\n     \"Espresso\"));\r\n\r\n    menu.appendChild(createMenuItem(\"Cappuccino\",\r\n    \"Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.\",\r\n    \"Cappuccino\"));\r\n\r\n    menu.appendChild(createMenuItem(\"Flat White\",\r\n    \"Smooth ristretto shots of espresso get the perfect amount of steamed whole milk to create a not-too-strong, not-too-creamy, just-right flavor.\",\r\n    \"FlatWhite\"));\r\n\r\n    return menu;\r\n}\r\n\r\nfunction createMenuItem(name, description, image) {\r\n    const menu_item = document.createElement(\"div\");\r\n    menu_item.setAttribute(\"class\", \"menu-item\");\r\n\r\n    const item_name = document.createElement(\"h3\");\r\n    item_name.textContent = name;\r\n\r\n    const item_description = document.createElement(\"p\");\r\n    item_description.textContent = description;\r\n\r\n    const item_img = document.createElement(\"img\");\r\n    item_img.setAttribute(\"src\", `images/${image}.png`);\r\n    item_img.setAttribute(\"alt\", `${name}.png`);\r\n\r\n    menu_item.appendChild(item_name);\r\n    menu_item.appendChild(item_description);\r\n    menu_item.appendChild(item_img);\r\n\r\n    return menu_item;\r\n}\r\n\r\nfunction loadMenu() {\r\n    const main = document.getElementById(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;