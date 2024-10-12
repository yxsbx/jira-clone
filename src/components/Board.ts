import { Board } from "../core/domain/Board";
import { ColumnComponent } from "./Column";

export class BoardComponent {
  constructor(private board: Board) {}

  render(container: HTMLElement) {
    const boardElement = document.createElement("div");
    boardElement.classList.add(
      "flex",
      "space-x-4",
      "container",
      "mx-auto",
      "my-10",
      "p-4"
    );

    this.board.columns.forEach((coluns) => {
      const columnComponent = new ColumnComponent(coluns);
      columnComponent.render(boardElement);
    });

    container.appendChild(boardElement);
  }
}
