export class Tasks {
    taskId: number;
    title: string;
    completed: boolean;

    constructor(taskId: number, title: string, completed: boolean) {
        this.taskId = taskId;
        this.title = title;
        this.completed = completed;
    }
}