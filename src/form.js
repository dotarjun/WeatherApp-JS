import { loadJson } from "./loadJson.js";

export function createForm() {
    const form = document.querySelector('form');
    const input = form.querySelector('input');
    const inputVal = input.value;
    // loadJson()
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log(inputVal);
        // console.log(loadJson().locationInput)
        loadJson()
        // console.log(loadJson().weatherJSON);
        return {
            inputVal
        }
    })
}