import { ModelBase } from "../model-base";

export interface Plan extends ModelBase{
    idPlan : number;
    idSchedule : number;
    name : string;
    description : string;
}