import { loadJson } from "./loadJson.js";

export function createForm() {
    const form = document.querySelector('form');
    const input = form.querySelector('input');
    const inputVal = input.value;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log(loadJson().locationInput)
        loadJson()
        return {
            inputVal
        }
    })
}