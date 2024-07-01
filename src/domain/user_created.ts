import { Email } from "~/domain";
import { DomainEvent } from "./core/mod.ts";

export class UserCreated extends DomainEvent<"UserCreated", Email> {}
