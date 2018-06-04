export class Sub {
    subname: string;
    date: Date;

    constructor(values: Object = {}) {
        //Constructor initialisation
        Object.assign(this, values);
    }
}