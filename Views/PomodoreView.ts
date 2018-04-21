import {Observer} from "../util/Interfaces/Observer"
import {Time} from "../Interfaces/Time"
import {Mode} from "../Mode"

export class PomodoreView implements Observer {
    private timerTitle: HTMLElement;
    private display: HTMLElement;

    public constructor(timerTitle: HTMLElement, display: HTMLElement) {
        this.timerTitle = timerTitle;
        this.display = display;
    }

    public update(title: string): this {
        this.timerTitle.innerHTML = title;
        if (title === Mode.SESSION) {
            this.timerTitle.classList.add("title-session")
            this.timerTitle.classList.remove("title-break")
            this.display.classList.add("display-session")
            this.display.classList.remove("display-break")
        } else {
            this.timerTitle.classList.add("title-break")
            this.timerTitle.classList.remove("title-session")
            this.display.classList.add("display-break")
            this.display.classList.remove("display-session")
        }
        return this;
    }
}
