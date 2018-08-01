import { ModelBase } from "../model-base";

export interface Cost extends ModelBase{
    id : number;
    idSeason : number;
    idPeople : number;
    percent : number;
}