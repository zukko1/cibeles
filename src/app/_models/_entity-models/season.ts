import { ModelBase } from "../model-base";
import { Cost } from "./cost";

export interface Season extends ModelBase{

    id : number;
    name : string;
    travelDates : string[];
    costs : Cost[];
}