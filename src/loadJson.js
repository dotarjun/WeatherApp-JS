import { sensitiveData } from "./config.js";
// import { createForm } from "./form.js";

let locationInput = 'Delhi'

async function loadJson() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&APPID=${sensitiveData().appid}&units=metric`);
    const weatherJSON = await response.json();
    await console.log(weatherJSON);
    return weatherJSON;
}

export function createForm() {
    const form = document.querySelector('form');
    const input = form.querySelector('input');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputVal = input.value;
        inputVal == '' ? locationInput = 'Delhi' : locationInput = inputVal;
        const jsonData = loadJson()
        console.log(locationInput);
        return jsonData
    })
}

function addInfo(text) {
    const temp = document.getElementById('info');
    temp.textContent = text;
}
