export async function loadJson(url) {
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