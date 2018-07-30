import { ModelBase } from "../model-base";

export interface Travel extends ModelBase{
    
    id : number;
    idHotel : number;
    idPlan : number;
    idTravelDates : number;
    basePrice : number;
}