import { ModelBase } from "../model-base";
import { Hotel } from "./hotel";
import { Plan } from "./plan";

export interface Travel extends ModelBase {

    id : number;
    idHotel : number;
    idPlan : number;
    idTravelDates : number;
    basePrice : number;

    hotel : Hotel;
    plan : Plan;
    stardDate : Date;
    finishDate : Date;

    TravelRoute : string;
}