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

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("const containerEl = document.querySelector('.todoContainer');\r\nconst inputEl = document.querySelector('input');\r\nconst formEl = document.querySelector('form');\r\nconst completedContainerEl = document.querySelector('.completedContainer');\r\nformEl.addEventListener('submit', e => {\r\n  e.preventDefault();\r\n  console.log(e);\r\n  const userInput = inputEl.value;\r\n  const div = document.createElement('div');\r\n  div.classList.add('todoItem');\r\n  div.innerHTML = `<p>${userInput}</p> <button class='completed'><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>`;\r\n  containerEl.append(div);\r\n  // ! clear value HOW?\r\n  inputEl.value = '';\r\n});\r\n\r\ncontainerEl.addEventListener('click', e => {\r\n  const currentElement = e.target;\r\n  if (currentElement.nodeName !== 'BUTTON') {\r\n    console.log('Not a button');\r\n    return;\r\n  }\r\n  console.log(currentElement.parentElement);\r\n  if (currentElement.getAttribute('class') === 'completed') {\r\n    currentElement.parentElement.classList.remove('todoItem');\r\n    currentElement.parentElement.classList.add('completedItem');\r\n    currentElement.innerHTML = '<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>';\r\n    currentElement.classList.remove('completed');\r\n    currentElement.classList.add('remove');\r\n  } else {\r\n    currentElement.parentElement.remove();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://4-webpack/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;