import { TravelRoute } from "./travel-routes";
import { ModelBase } from "../model-base";

export interface Place extends ModelBase{
    id : number;
    name : string;
    travelRoutes : TravelRoute[];
}