import { loadJson } from "./loadJson.js";
import { sensitiveData } from "./config.js";

export function createForm() {
    const form = document.querySelector('form');
    const input = form.querySelector('input');
    // const submitBtn = form.querySelector('button');

    let locationInput = 'Delhi'

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        locationInput = input.value;
        input.value = '';
        
        console.log(locationInput)
        loadJson(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&APPID=${sensitiveData().appid}&units=metric`)
    })

    // return {
    //     locationInput
    // }


}
