import {TimerView} from "./Views/TimerView"
import {Timer} from "./Models/Timer"
import {Pomodore} from "./Models/Pomodore"
import {PomodoreController} from "./Controllers/PomodoreController"

window.addEventListener("DOMContentLoaded", () => {
    let clock = <HTMLElement>document.querySelector("#timer p")
    let timerView = new TimerView(clock)
    let timer = new Timer
    let pomodore = new Pomodore(timer)

    let inputBreak = <HTMLInputElement>document.querySelector('.break-time')
    let inputSession = <HTMLInputElement>document.querySelector('.session-time')
    let controller = new PomodoreController(inputBreak, inputSession, pomodore)

    timer.attach(timerView)
    let applyButton = document.querySelector('.bt-apply')
    applyButton.addEventListener('click',  e => {
        e.preventDefault();
        pomodore.play();
    })

    inputSession.addEventListener("click", e => {
        controller.applyTimeValues()
    })
    inputSession.addEventListener("keyup", e => {
        controller.applyTimeValues()
    })
    inputBreak.addEventListener("click", e => {
        controller.applyTimeValues()
    })
    inputBreak.addEventListener("keyup", e => {
        controller.applyTimeValues()
    })
})
