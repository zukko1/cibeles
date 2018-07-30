import { ModelBase } from "../model-base";

export interface Day extends ModelBase{
    id : number;
    name : string;
    activities : string;
}