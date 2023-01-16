"use strict";
(self["webpackChunkweatherapp_js"] = self["webpackChunkweatherapp_js"] || []).push([["loadJson"],{

/***/ "./src/loadJson.js":
/*!*************************!*\
  !*** ./src/loadJson.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJson": () => (/* binding */ loadJson)
/* harmony export */ });
async function loadJson(url) {
    const response = await fetch(url);
    const weatherJSON = await response.json();

    console.log(weatherJSON);
    return {
        weatherJSON
    }
}

function addInfo(text) {
    const temp = document.getElementById('info');
    temp.textContent = text;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/loadJson.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZEpzb24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAtanMvLi9zcmMvbG9hZEpzb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRKc29uKHVybCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCB3ZWF0aGVySlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJKU09OKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3ZWF0aGVySlNPTlxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkSW5mbyh0ZXh0KSB7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvJyk7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IHRleHQ7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=