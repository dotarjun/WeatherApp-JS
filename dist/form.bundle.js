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
    // const submitBtn = form.querySelector('button');

    let locationInput = 'Delhi'

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        locationInput = input.value;
        input.value = '';

        console.log(locationInput)
        ;(0,_loadJson_js__WEBPACK_IMPORTED_MODULE_0__.loadJson)(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&APPID=${(0,_config_js__WEBPACK_IMPORTED_MODULE_1__.sensitiveData)().appid}&units=metric`)
    })

    // return {
    //     locationInput
    // }


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


    await addInfo(`Temperature in ${weatherJSON.name}, ${weatherJSON.sys.country} is ${weatherJSON.main.temp} C. ${weatherJSON.weather[0].description} Visibility: ${weatherJSON.visibility / 1000}Km `);
    // addInfo(`Max Temp:  ${ weatherJSON.main.temp_max } C`);
    // addInfo(`Min Temp:  ${ weatherJSON.main.temp_min } C`);
    // addInfo(`Feels like:  ${ weatherJSON.main.feels_like } C`);
    console.log(weatherJSON);
}

function addInfo(text) {

    // const temp = document.getElementById('info');
    // const p = document.createElement('p');
    // temp.textContent = text;
    // document.body.appendChild(p)

    

}

// loadJson();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/form.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRU87QUFDUDtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7OztBQ0x5QztBQUNHOztBQUVyQztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHVEQUFRLHNEQUFzRCxjQUFjLFNBQVMseURBQWEsU0FBUztBQUNuSCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCTztBQUNQO0FBQ0E7OztBQUdBLG9DQUFvQyxpQkFBaUIsSUFBSSx5QkFBeUIsS0FBSyx1QkFBdUIsS0FBSyxvQ0FBb0MsY0FBYyw4QkFBOEI7QUFDbk0sOEJBQThCLDRCQUE0QjtBQUMxRCw4QkFBOEIsNEJBQTRCO0FBQzFELGdDQUFnQyw4QkFBOEI7QUFDOUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAtanMvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAtanMvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLWpzLy4vc3JjL2xvYWRKc29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZnVuY3Rpb24gc2Vuc2l0aXZlRGF0YSgpIHtcbiAgICBjb25zdCBhcHBpZCA9ICcyZDFkN2JlZTdlNjdjMTBmMjE5OWVlZTc3ZDMzYjU3Yic7XG4gICAgcmV0dXJuIHsgYXBwaWQgfTtcbn0iLCJpbXBvcnQgeyBsb2FkSnNvbiB9IGZyb20gXCIuL2xvYWRKc29uLmpzXCI7XG5pbXBvcnQgeyBzZW5zaXRpdmVEYXRhIH0gZnJvbSBcIi4vY29uZmlnLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgY29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgLy8gY29uc3Qgc3VibWl0QnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblxuICAgIGxldCBsb2NhdGlvbklucHV0ID0gJ0RlbGhpJ1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbG9jYXRpb25JbnB1dCA9IGlucHV0LnZhbHVlO1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uSW5wdXQpXG4gICAgICAgIGxvYWRKc29uKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb25JbnB1dH0mQVBQSUQ9JHtzZW5zaXRpdmVEYXRhKCkuYXBwaWR9JnVuaXRzPW1ldHJpY2ApXG4gICAgfSlcblxuICAgIC8vIHJldHVybiB7XG4gICAgLy8gICAgIGxvY2F0aW9uSW5wdXRcbiAgICAvLyB9XG5cblxufVxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRKc29uKHVybCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCB3ZWF0aGVySlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXG4gICAgYXdhaXQgYWRkSW5mbyhgVGVtcGVyYXR1cmUgaW4gJHt3ZWF0aGVySlNPTi5uYW1lfSwgJHt3ZWF0aGVySlNPTi5zeXMuY291bnRyeX0gaXMgJHt3ZWF0aGVySlNPTi5tYWluLnRlbXB9IEMuICR7d2VhdGhlckpTT04ud2VhdGhlclswXS5kZXNjcmlwdGlvbn0gVmlzaWJpbGl0eTogJHt3ZWF0aGVySlNPTi52aXNpYmlsaXR5IC8gMTAwMH1LbSBgKTtcbiAgICAvLyBhZGRJbmZvKGBNYXggVGVtcDogICR7IHdlYXRoZXJKU09OLm1haW4udGVtcF9tYXggfSBDYCk7XG4gICAgLy8gYWRkSW5mbyhgTWluIFRlbXA6ICAkeyB3ZWF0aGVySlNPTi5tYWluLnRlbXBfbWluIH0gQ2ApO1xuICAgIC8vIGFkZEluZm8oYEZlZWxzIGxpa2U6ICAkeyB3ZWF0aGVySlNPTi5tYWluLmZlZWxzX2xpa2UgfSBDYCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckpTT04pO1xufVxuXG5mdW5jdGlvbiBhZGRJbmZvKHRleHQpIHtcblxuICAgIC8vIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mbycpO1xuICAgIC8vIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gdGVtcC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwKVxuXG4gICAgXG5cbn1cblxuLy8gbG9hZEpzb24oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=