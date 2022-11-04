import { User } from "./user";

export interface AuthStatus {
    connected : boolean,
    user? : User
}
