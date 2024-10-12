import { Column } from "../core/domain/Column";
import { TaskComponent } from "./Task";

export class ColumnComponent {
  constructor(private column: Column) {}

  render(container: HTMLElement) {
    const columnElement = document.createElement("div");
    columnElement.classList.add(
      "w-80",
      "bg-gray-100",
      "p-4",
      "rounded-lg",
      "shadow-lg"
    );

    const title = document.createElement("h2");
    title.classList.add("text-xl", "font-bold", "mb-4");
    title.textContent = this.column.name;
    columnElement.appendChild(title);

    this.column.tasks.forEach((task) => {
      const taskComponent = new TaskComponent(task);
      taskComponent.render(columnElement);
    });

    container.appendChild(columnElement);
  }
}
