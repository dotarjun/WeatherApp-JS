import { sensitiveData } from "./config.js";
import { createForm } from "./form.js";

export async function loadJson() {
    let locationInput = 'Delhi'

    createForm().inputVal == '' ? locationInput = 'Delhi' : locationInput = createForm().inputVal;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&APPID=${sensitiveData().appid}&units=metric`);
    const weatherJSON = await response.json();
    console.log(weatherJSON);
    return { weatherJSON, locationInput };
}

function addInfo(text) {
    const temp = document.getElementById('info');
    temp.textContent = text;
}
