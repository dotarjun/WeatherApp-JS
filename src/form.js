import { sensitiveData } from "./config.js";
// import { updateImage } from "./weatherImages.js";
// import { updateImage } from "./weatherImages.js";

let locationInput = 'Delhi'


async function updateImage() {
    const img = document.getElementById('weather-image');
    // const jsondata = await createForm().weatherData;
    const formData = await createForm()
    // console.log(`Data ${jsondata}`);
    console.log(formData);
    const description = formData.weather[0].description;
    console.log(description);
}




export function createForm() {
    const form = document.querySelector('form');
    const input = form.querySelector('input');
    let jsonData;
    jsonData = loadJson();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputVal = input.value;
        inputVal == '' ? locationInput = 'Delhi' : locationInput = inputVal;
        console.log(locationInput);
        jsonData = loadJson();
        updateImage()
    })

    async function loadJson() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&APPID=${sensitiveData().appid}&units=metric`);
        const weatherJSON = await response.json();
        // updateImage()
        // console.log(weatherJSON);
        return weatherJSON;
    }

    return jsonData;
    // const jsonData = loadJson().weatherJSON
}

function addInfo(text) {
    const temp = document.getElementById('info');
    temp.textContent = text;
}

