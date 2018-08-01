import { ModelBase } from "../model-base";
import { Travel } from "./travel";

export interface TavelDate extends ModelBase{
    
    id : number;
    travels : Travel[];
    idSeasons : number;
    startDate : Date;
    finishDate : Date;
} 