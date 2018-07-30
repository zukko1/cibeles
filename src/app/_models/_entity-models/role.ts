import { ModelBase } from "../model-base";

export interface Role extends ModelBase{
    groups : string[];
    role :	string;
    name :	string;

}