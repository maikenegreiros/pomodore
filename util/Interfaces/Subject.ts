import {Observer} from "./Observer"

export interface Subject {
    attach(observer: Observer): this;
    detach(observer: Observer): this;
    notify(data: any): this;
}
