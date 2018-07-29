import { ModelBase } from "../model-base";

export interface Travel extends ModelBase{
    idHotel : number;
    idPlan : number;
    idTravelDates : number;
    idtravel : number;
    basePrice : number;
}