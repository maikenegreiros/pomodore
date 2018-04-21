import {TimerView} from "../Views/TimerView"
import {PomodoreView} from "../Views/PomodoreView"
import {Timer} from "../Models/Timer"
import {Pomodore} from "../Models/Pomodore"

export class PomodoreController
{
    public init()
    {
        let display = <HTMLElement>document.querySelector("#timer")
        let clock = <HTMLElement>document.querySelector("#timer p")
        let timerTitle = <HTMLElement>document.querySelector(".timer-type")
        let button = <HTMLButtonElement>document.querySelector(".bt-apply")

        let timerView = new TimerView(display, clock, button)
        let pomodoreView = new PomodoreView(timerTitle, display)

        let timerSession = new Timer
        let timerBreak = new Timer

        let pomodore = new Pomodore(timerSession, timerBreak, timerView)

        pomodore.attach(pomodoreView)
        timerSession.attach(timerView)
        timerBreak.attach(timerView)

        let inputBreak = <HTMLInputElement>document.querySelector('.break-time')
        let inputSession = <HTMLInputElement>document.querySelector('.session-time')

        timerSession.setTime(parseInt(inputSession.value))
        timerBreak.setTime(parseInt(inputBreak.value))
        pomodore.play();
    }
}
