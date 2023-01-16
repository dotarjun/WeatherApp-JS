"use strict";
(self["webpackChunkweatherapp_js"] = self["webpackChunkweatherapp_js"] || []).push([["form"],{

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sensitiveData": () => (/* binding */ sensitiveData)
/* harmony export */ });


function sensitiveData() {
    const appid = '2d1d7bee7e67c10f2199eee77d33b57b';
    return { appid };
}

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForm": () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _loadJson_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadJson.js */ "./src/loadJson.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ "./src/config.js");



function createForm() {
    const form = document.querySelector('form');
    const input = form.querySelector('input');
    let locationInput;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        input.value == '' ? locationInput = 'Delhi' : locationInput = input.value;
        console.log(locationInput)
        ;(0,_loadJson_js__WEBPACK_IMPORTED_MODULE_0__.loadJson)(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&APPID=${(0,_config_js__WEBPACK_IMPORTED_MODULE_1__.sensitiveData)().appid}&units=metric`)
    })
}


/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/form.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRU87QUFDUDtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7OztBQ0x5QztBQUNHOztBQUVyQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBUSxzREFBc0QsY0FBYyxTQUFTLHlEQUFhLFNBQVM7QUFDbkgsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAtanMvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAtanMvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLWpzLy4vc3JjL2xvYWRKc29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZnVuY3Rpb24gc2Vuc2l0aXZlRGF0YSgpIHtcbiAgICBjb25zdCBhcHBpZCA9ICcyZDFkN2JlZTdlNjdjMTBmMjE5OWVlZTc3ZDMzYjU3Yic7XG4gICAgcmV0dXJuIHsgYXBwaWQgfTtcbn0iLCJpbXBvcnQgeyBsb2FkSnNvbiB9IGZyb20gXCIuL2xvYWRKc29uLmpzXCI7XG5pbXBvcnQgeyBzZW5zaXRpdmVEYXRhIH0gZnJvbSBcIi4vY29uZmlnLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgY29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgbGV0IGxvY2F0aW9uSW5wdXQ7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlucHV0LnZhbHVlID09ICcnID8gbG9jYXRpb25JbnB1dCA9ICdEZWxoaScgOiBsb2NhdGlvbklucHV0ID0gaW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uSW5wdXQpXG4gICAgICAgIGxvYWRKc29uKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb25JbnB1dH0mQVBQSUQ9JHtzZW5zaXRpdmVEYXRhKCkuYXBwaWR9JnVuaXRzPW1ldHJpY2ApXG4gICAgfSlcbn1cbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkSnNvbih1cmwpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3Qgd2VhdGhlckpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVySlNPTik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2VhdGhlckpTT05cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZEluZm8odGV4dCkge1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mbycpO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSB0ZXh0O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9