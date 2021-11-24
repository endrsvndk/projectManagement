import { Task } from "./task.model";

export class Project{
    constructor(
        public id?:number,
        public name?:string,
        public description?:string,
        public tasks?: Task[],
        public categoryId?:number
    ){

    }

}