import { Observable } from "rxjs";
import { User } from "../../_models/user";

export interface IUser{
  login(user, pass):Observable<User>;
}