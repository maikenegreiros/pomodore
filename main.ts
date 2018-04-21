import {PomodoreController} from "./Controllers/PomodoreController"

window.addEventListener("DOMContentLoaded", () => {
    let button = <HTMLButtonElement>document.querySelector(".bt-apply")

    button.addEventListener('click',  e => {
        e.preventDefault();
        (new PomodoreController).init();
    })
})
