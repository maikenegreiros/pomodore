import {Subject} from "../util/Interfaces/Subject"
import {Observer} from "../util/Interfaces/Observer"
import {Mode} from "../Mode"
import {Timer} from "./Timer"

export class Pomodore implements Subject {
    private break: number;
    private session: number;
    private currentMode: Mode;
    public timer: Timer;
    private Observers: Array<Observer>

    public constructor(timer: Timer) {
        this.break = 5;
        this.session = 25;
        this.currentMode = Mode.SESSION;
        this.timer = timer;
        this.Observers = [];
    }

    public attach(observer: Observer): this {
        this.Observers.push(observer);
        return this;
    }

    public detach(observer: Observer): this {
        this.Observers = this.Observers.filter(item => item !== observer);
        return this;
    }

    public notify(data): this {
        this.Observers.forEach(observer => observer.update(data));
        return this;
    }

    public setBreak(value:number): this
    {
        this.break = value;
        return this;
    }

    public setSession(value:number): this
    {
        this.session = value;
        return this;
    }

    public play(): this
    {
        this.timer.countDown(this[this.currentMode])
        return this
    }
}
