/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function createHeader() {\r\n    const header = document.createElement(\"header\");\r\n    \r\n    const title_header = document.createElement(\"h1\");\r\n    title_header.textContent = \"Restaurant Page\";\r\n\r\n    header.appendChild(title_header);\r\n    header.appendChild(createNavMenu());\r\n    \r\n    return header;\r\n}\r\n\r\nfunction createNavMenu() {\r\n    const nav_menu = document.createElement(\"nav\");\r\n\r\n    const home_button = document.createElement(\"button\");\r\n    home_button.textContent = \"Home\";\r\n\r\n    const menu_button = document.createElement(\"button\");\r\n    menu_button.textContent = \"Menu\";\r\n\r\n    const contact_button = document.createElement(\"button\");\r\n    contact_button.textContent = \"Contact\";\r\n\r\n    nav_menu.appendChild(home_button);\r\n    nav_menu.appendChild(menu_button);\r\n    nav_menu.appendChild(contact_button);\r\n    \r\n    return nav_menu\r\n}\r\n\r\nfunction createMain() {\r\n    const main = document.createElement(\"main\");\r\n\r\n    return main;\r\n}\r\n\r\nfunction createFooter() {\r\n    // add footer later\r\n    // return footer;\r\n};\r\n\r\nfunction initWebsite(){\r\n    const content = document.getElementById(\"content\");\r\n\r\n    content.appendChild(createHeader());\r\n    content.appendChild(createMain());\r\n    // content.appendChild(createFooter());\r\n}\r\n\r\n\r\ninitWebsite()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;