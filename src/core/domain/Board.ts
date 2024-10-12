import { Column } from "./Column";

export class Board {
  constructor(
    public id: string,
    public name: string,
    public columns: Column[] = []
  ) {}

  addColumn(column: Column) {
    this.columns.push(column);
  }

  removeColumn(columnId: string) {
    this.columns = this.columns.filter((column) => column.id !== columnId);
  }
}
