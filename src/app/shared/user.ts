import { Sub } from "./sub";
import { Tap } from "./tap";

export class User { 
    id: number;
    fname: string;
    lname: string;
    uname: string;
    pass: string;
    subs: Sub[];
    taps: Tap[];

    constructor(values: Object = {}) { 
        //Constructor initialisation
        Object.assign(this, values);
    }
}