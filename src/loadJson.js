import { updateImage } from "./weatherImages.js";

export async function loadJson(url) {
    const response = await fetch(url);
    const weatherJSON = await response.json();
    await addInfo(`Temperature in ${weatherJSON.name}, ${weatherJSON.sys.country} is ${weatherJSON.main.temp} C. ${weatherJSON.weather[0].description} Visibility: ${weatherJSON.visibility / 1000}Km `);
    console.log(weatherJSON);
}

function addInfo(text) {
    const temp = document.getElementById('info');
    temp.textContent = text;
}
