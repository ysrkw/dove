import { Email } from "~/domain";
import { DomainEvent } from "./core/mod.ts";

export class UserPasswordChanged
  extends DomainEvent<"UserPasswordChanged", Email> {}
