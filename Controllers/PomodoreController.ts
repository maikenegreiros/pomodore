import {Pomodore} from "../Models/Pomodore"

export class PomodoreController {
    private inputBreak: HTMLInputElement;
    private inputSession: HTMLInputElement;
    private pomodore: Pomodore;

    public constructor (
        inputBreak:HTMLInputElement,
        inputSession:HTMLInputElement,
        pomodore: Pomodore
    ) {
        this.inputBreak = inputBreak;
        this.inputSession = inputSession;
        this.pomodore = pomodore
    }

    public applyTimeValues(): this {
        this.pomodore.setBreak(parseInt(this.inputBreak.value));
        this.pomodore.setSession(parseInt(this.inputSession.value));
        this.pomodore.timer.notify({
            minutes: this.inputSession.value,
            seconds: 60
        });
        return this;
    }
}
