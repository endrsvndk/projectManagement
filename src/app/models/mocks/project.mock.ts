import { Project } from "../project.model";
import { Task } from "../task.model";

export const Projects: Project[] = [
    new Project(1, 'Proje 1', 'proje bir\'in açıklaması',
        [
            new Task(1, 'Bir görev...', 'Görev açıklaması', new Date(2021, 11, 1), false),
            new Task(2, 'Başka Bir görev...', 'Görev açıklaması', new Date(2021, 10, 23), true),

        ], 1),
    new Project(1, 'Proje 3', 'proje ikinin açıklaması',
        [
            new Task(1, 'Bir görev...', 'Görev açıklaması', new Date(2021, 11, 1), false),
            new Task(2, 'Başka Bir görev...', 'Görev açıklaması', new Date(2021, 10, 23), true),

        ], 2),
    new Project(1, 'Proje 2', 'proje üçün açıklaması',
        [
            new Task(1, 'Bir görev...', 'Görev açıklaması', new Date(2021, 11, 1), false),
            new Task(2, 'Başka Bir görev...', 'Görev açıklaması', new Date(2021, 10, 23), true),

        ], 3),

        new Project(1,'bir angular projesi','proje bir\'in açıklaması',
        [
           new Task(1, 'Bir görev...','Görev açıklaması', new Date(2021,11,1),false),
           new Task(2, 'Başka Bir görev...','Görev açıklaması', new Date(2021,10,23),true), 

        ],4  )


]