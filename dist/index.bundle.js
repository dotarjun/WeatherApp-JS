(self["webpackChunkweatherapp_js"] = self["webpackChunkweatherapp_js"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {


const appid = '2d1d7bee7e67c10f2199eee77d33b57b';

async function loadJson(url) {
    const response = await fetch(url);
    const weatherJSON = await response.json();
    console.log(weatherJSON);
}

loadJson(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=${appid}`);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEVBQTBFLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLWpzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgYXBwaWQgPSAnMmQxZDdiZWU3ZTY3YzEwZjIxOTllZWU3N2QzM2I1N2InO1xuXG5hc3luYyBmdW5jdGlvbiBsb2FkSnNvbih1cmwpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3Qgd2VhdGhlckpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckpTT04pO1xufVxuXG5sb2FkSnNvbihgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1EZWxoaSZBUFBJRD0ke2FwcGlkfWApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==