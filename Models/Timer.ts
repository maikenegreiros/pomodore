import {Subject} from "../util/Interfaces/Subject"
import {Observer} from "../util/Interfaces/Observer"


export class Timer implements Subject {
    private minutes: number;
    private seconds: number;
    private Observers: Array<Observer>
    private timerId: number;

    public constructor() {
        this.Observers = [];
        this.seconds = 60;
    }

    public attach(observer: Observer): this {
        this.Observers.push(observer);
        return this;
    }

    public detach(observer: Observer): this {
        this.Observers = this.Observers.filter(item => item !== observer);
        return this;
    }

    public notify(data):this {
        this.Observers.forEach(observer => observer.update(data));
        return this;
    }

    public countDown(minutes: number): this	{
        if(this.timerId) {
            clearInterval(this.timerId)
            this.seconds = 60;
        }
        this.minutes = minutes
        this.notify({
            minutes: this.minutes,
            seconds: this.seconds
        })
        this.minutes--
        this.timerId = setInterval(() => {
            this.seconds--

            this.notify({
                minutes: this.minutes,
                seconds: this.seconds
            })

            if(!this.seconds && !this.minutes) {
                clearInterval(this.timerId)
                this.playAlarm();
            } else if(!this.seconds) {
                this.seconds = 60
                this.minutes--
            }
        }, 1000)

        return this
    }

    private playAlarm(): this
    {
        return this;
    }
}
