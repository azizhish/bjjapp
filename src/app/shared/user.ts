export class User { 
    id: number;
    fname: string;
    lname: string;
    uname: string;
    pass: string;

    constructor(values: Object = {}) { 
        //Constructor initialisation
        Object.assign(this, values);
    }
}