

const appid = '2d1d7bee7e67c10f2199eee77d33b57b';

let location = 'Ontario';
// let location = prompt('Enter the Location')

async function loadJson(url) {
    const response = await fetch(url);
    const weatherJSON = await response.json();

    addInfo(`Temp:  ${weatherJSON.main.temp} C`);
    addInfo(`Max Temp:  ${weatherJSON.main.temp_max} C`);
    addInfo(`Min Temp:  ${weatherJSON.main.temp_min} C`);
    addInfo(`Feels like:  ${weatherJSON.main.feels_like} C`);
}

function addInfo(text) {
    const p = document.createElement('p');
    p.textContent = text;
    document.body.appendChild(p)
}


loadJson(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${appid}&units=metric`);

// const p = document.createElement('p');
// p.textContent = weatherData;
// document.body.append(p);