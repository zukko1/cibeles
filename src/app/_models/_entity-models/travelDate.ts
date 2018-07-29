import { ModelBase } from "../model-base";

export interface TavelDate extends ModelBase{
    idDates : number;
    idSeasons : number;
    startDate : Date;
    finishDate : Date;
} 