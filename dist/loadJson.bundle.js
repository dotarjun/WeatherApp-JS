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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/loadJson.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZEpzb24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7OztBQUdBLG9DQUFvQyxpQkFBaUIsSUFBSSx5QkFBeUIsS0FBSyx1QkFBdUIsS0FBSyxvQ0FBb0MsY0FBYyw4QkFBOEI7QUFDbk0sOEJBQThCLDRCQUE0QjtBQUMxRCw4QkFBOEIsNEJBQTRCO0FBQzFELGdDQUFnQyw4QkFBOEI7QUFDOUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAtanMvLi9zcmMvbG9hZEpzb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRKc29uKHVybCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCB3ZWF0aGVySlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXG4gICAgYXdhaXQgYWRkSW5mbyhgVGVtcGVyYXR1cmUgaW4gJHt3ZWF0aGVySlNPTi5uYW1lfSwgJHt3ZWF0aGVySlNPTi5zeXMuY291bnRyeX0gaXMgJHt3ZWF0aGVySlNPTi5tYWluLnRlbXB9IEMuICR7d2VhdGhlckpTT04ud2VhdGhlclswXS5kZXNjcmlwdGlvbn0gVmlzaWJpbGl0eTogJHt3ZWF0aGVySlNPTi52aXNpYmlsaXR5IC8gMTAwMH1LbSBgKTtcbiAgICAvLyBhZGRJbmZvKGBNYXggVGVtcDogICR7IHdlYXRoZXJKU09OLm1haW4udGVtcF9tYXggfSBDYCk7XG4gICAgLy8gYWRkSW5mbyhgTWluIFRlbXA6ICAkeyB3ZWF0aGVySlNPTi5tYWluLnRlbXBfbWluIH0gQ2ApO1xuICAgIC8vIGFkZEluZm8oYEZlZWxzIGxpa2U6ICAkeyB3ZWF0aGVySlNPTi5tYWluLmZlZWxzX2xpa2UgfSBDYCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckpTT04pO1xufVxuXG5mdW5jdGlvbiBhZGRJbmZvKHRleHQpIHtcblxuICAgIC8vIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mbycpO1xuICAgIC8vIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gdGVtcC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwKVxuXG4gICAgXG5cbn1cblxuLy8gbG9hZEpzb24oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=