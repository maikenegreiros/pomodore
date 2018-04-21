import {Observer} from "../util/Interfaces/Observer"
import {Time} from "../Interfaces/Time"

export class TimerView implements Observer {
    private timerDisplay: HTMLElement;
    private time: HTMLElement;
    private button: HTMLButtonElement;

    public constructor(timerDisplay: HTMLElement, time:HTMLElement, button: HTMLButtonElement) {
        this.timerDisplay = timerDisplay;
        this.time = time;
        this.button = button;
    }

    public update(time): this {
        let minutes = time.minutes.toString()
        let seconds = time.seconds.toString()

        if(seconds === "60") seconds = "00"
        if(seconds.length === 1) seconds = `0${seconds}`

        this.time.innerHTML = `${minutes}:${seconds}`;

        if (time.minutes || time.seconds) {
            this.button.disabled = true
        } else {
            this.button.disabled = false
        }
        return this;
    }
}
