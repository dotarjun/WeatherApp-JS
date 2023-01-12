import { loadJson } from "./loadJson.js";
import { sensitiveData } from "./config.js";

export function createForm() {
    const form = document.querySelector('form');
    const input = form.querySelector('input');
    let locationInput;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        input.value == '' ? locationInput = 'Delhi' : locationInput = input.value;
        console.log(locationInput)
        loadJson(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&APPID=${sensitiveData().appid}&units=metric`)
    })
}
