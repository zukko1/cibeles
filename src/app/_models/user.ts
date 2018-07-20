import { ModelBase } from "./model-base";

export interface User extends ModelBase {
    'username' : string;
    'salt' : string;
    'password' : string;
    'roles' : string[];
    'isActive' : boolean;
    'groups' : string[];
}