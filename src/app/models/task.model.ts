export class Task{
    constructor(
        public id?:number,
        public name? : string,
        public description?: string,
        public expectedEndDate?: Date,
        public isCompleted?:boolean

    ){}
}