import { Task } from "../core/domain/Task";

export class TaskComponent {
  constructor(private task: Task) {}

  render(container: HTMLElement) {
    const taskElement = document.createElement("div");
    taskElement.classList.add(
      "bg-white",
      "p-4",
      "rounded",
      "shadow",
      "mb-4",
      "border",
      "border-gray-300"
    );

    const title = document.createElement("h3");
    title.classList.add("font-semibold");
    title.textContent = this.task.title;

    const description = document.createElement("p");
    description.classList.add("text-sm", "text-gray-500");
    description.textContent = this.task.description;

    taskElement.appendChild(title);
    taskElement.appendChild(description);
    container.appendChild(taskElement);
  }
}
