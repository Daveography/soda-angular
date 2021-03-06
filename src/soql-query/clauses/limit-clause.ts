import { IClause } from "./clause";

export class LimitClause implements IClause {
  public readonly MaxRows: number;

  constructor(maxRows: number) {
    if (maxRows <= 0) {
      throw new Error("Max Rows must be 1 or greater");
    }

    if (!Number.isInteger(maxRows)) {
      throw new Error("Max Rows must be a whole number");
    }

    this.MaxRows = maxRows;
  }

  public toString(): string {
    if (this.MaxRows > 0) {
      return `$limit=${this.MaxRows}`;
    }

    return "";
  }
}
