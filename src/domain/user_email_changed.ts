import { Email } from "~/domain";
import { DomainEvent } from "./core/mod.ts";

export class UserEmailChanged extends DomainEvent<"UserEmailChanged", Email> {}
