import { ModelBase } from "../model-base";
import { Day } from "./day";
import { Plan } from "./plan";

export interface Schedule extends ModelBase{
    id : number;
    name : string;
    days : Day[];
    plans : Plan[]
}