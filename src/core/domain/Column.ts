import { Task } from "./Task";

export class Column {
  constructor(
    public id: string,
    public name: string,
    public tasks: Task[] = []
  ) {}

  addTask(task: Task) {
    this.tasks.push(task);
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
