export interface IQueryModel<Query extends object, Result extends unknown> {
  execution(query: Query): Promise<Result>;
}
