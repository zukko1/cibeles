import { ModelBase } from "../model-base";

export interface Day extends ModelBase{
    idDay : number;
    name : string;
    activities : string;
}