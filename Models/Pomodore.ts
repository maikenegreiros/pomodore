import {Subject} from "../util/Interfaces/Subject"
import {Observer} from "../util/Interfaces/Observer"
import {Mode} from "../Mode"
import {Timer} from "./Timer"

export class Pomodore implements Subject, Observer {
    private currentMode: Mode;
    public timerSession: Timer;
    public timerBreak: Timer;
    public timerView
    private Observers: Array<Observer>
    private timesPlayed: number

    public constructor(timerSession: Timer, timerBreak: Timer, timerView) {
        this.timesPlayed = 0
        this.currentMode = Mode.BREAK;
        this.timerSession = timerSession;
        this.timerView = timerView;
        this.timerBreak = timerBreak;
        this.Observers = [];
    }

    public attach(observer: Observer): this
    {
        this.Observers.push(observer);
        return this;
    }

    public detach(observer: Observer): this {
        this.Observers = this.Observers.filter(item => item !== observer);
        return this;
    }

    public notify(data):this
    {
        this.Observers.forEach(observer => observer.update(data));
        return this;
    }

    public update(data): this
    {
        if (!data.minutes && !data.seconds && this.timesPlayed < 1) {
            this.play()
            this.timesPlayed ++
        }
        return this;
    }

    public alternateTimers(): this
    {
        if (this.currentMode === Mode.SESSION) {
            this.currentMode = Mode.BREAK
            this.notify(this.currentMode)
            this.timerBreak.attach(this)
            this.timerSession.detach(this)
        } else {
            this.currentMode = Mode.SESSION
            this.notify(this.currentMode)
            this.timerSession.attach(this)
            this.timerBreak.detach(this)
        }

        return this;
    }

    public play(): this
    {
        this.alternateTimers()

        if (this.currentMode === Mode.SESSION) {
            this.timerSession.countDown()
            this.timerSession.attach(this.timerView)
            this.timerBreak.detach(this.timerView)
        } else {
            this.timerBreak.countDown()
            this.timerBreak.attach(this.timerView)
            this.timerSession.detach(this.timerView)
        }
        return this
    }
}
