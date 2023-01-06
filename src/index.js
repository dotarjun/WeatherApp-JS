
const appid = '2d1d7bee7e67c10f2199eee77d33b57b';

async function loadJson(url) {
    const response = await fetch(url);
    const weatherJSON = await response.json();
    console.log(weatherJSON);
}

loadJson(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=${appid}`);