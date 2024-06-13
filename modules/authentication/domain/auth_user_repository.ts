import { Username } from "../../../core/domain/username.ts";
import { AuthUser } from "./auth_user.ts";

export interface IAuthUserRepository {
  save(authUser: AuthUser): Promise<void>;
  findByUsername(username: Username): Promise<AuthUser | undefined>;
}
