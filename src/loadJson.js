export async function loadJson(url) {
    const response = await fetch(url);
    const weatherJSON = await response.json();


    await addInfo(`Temp:  ${weatherJSON.main.temp} C`);
    // addInfo(`Max Temp:  ${weatherJSON.main.temp_max} C`);
    // addInfo(`Min Temp:  ${weatherJSON.main.temp_min} C`);
    // addInfo(`Feels like:  ${weatherJSON.main.feels_like} C`);
}

function addInfo(text) {
    document.removeChild
    const p = document.createElement('p');
    p.textContent = text;
    document.body.appendChild(p)
}


// loadJson();