import { ModelBase } from "../model-base";
import { Day } from "./day";

export interface Schedule extends ModelBase{
    idSchedule : number;
    name : string;
    days : Day[];
}