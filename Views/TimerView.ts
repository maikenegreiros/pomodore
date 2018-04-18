import {Observer} from "../util/Interfaces/Observer"
import {Time} from "../Interfaces/Time"

export class TimerView implements Observer {
    private timerDisplay: HTMLElement;

    public constructor(timerDisplay: HTMLElement) {
        this.timerDisplay = timerDisplay;
    }

    public update(time: Time): this {
        let minutes = time.minutes.toString()
        let seconds = time.seconds.toString()

        if(seconds === "60") seconds = "00"
        if(seconds.length === 1) seconds = `0${seconds}`

        this.timerDisplay.innerHTML = `${minutes}:${seconds}`;
        return this;
    }
}
