export interface ICommandModel<Command extends object> {
  execution(command: Command): Promise<void>;
}
