import { Location } from '../datatypes/location';
import { Meters } from '../datatypes/metres';
import { Column } from '../soql-query-builder/clauses/column';
import { WithinBox } from '../soql-query-builder/clauses/where/functions/within-box';
import { WithinCircle } from '../soql-query-builder/clauses/where/functions/within-circle';
import { ILocationFilter } from './ilocationfilter';
import { IQueryable } from './iqueryable';
import { SoqlQuery } from './soql-query';

export class SoqlLocationFilter<TEntity> implements ILocationFilter<TEntity> {

  public constructor(protected readonly query: SoqlQuery<TEntity>, protected readonly column: Column) {
    if (!query) {
      throw new Error("queryBuilder must be provided");
    }
    if (!column) {
      throw new Error("column must be provided");
    }
  }

  public withinCircle(location: Location, radius: Meters): IQueryable<TEntity> {
    if (!location) {
      throw new Error("Location must be provided");
    }
    if (!radius) {
      throw new Error("Radius must be provided");
    }

    const filter = new WithinCircle(this.column, location, radius);
    return this.query.addFilter(filter);
  }

  public withinBox(start: Location, end: Location): IQueryable<TEntity> {
    if (!start) {
      throw new Error("Start location must be provided");
    }
    if (!end) {
      throw new Error("End location must be provided");
    }

    const filter = new WithinBox(this.column, start, end);
    return this.query.addFilter(filter);
  }
}