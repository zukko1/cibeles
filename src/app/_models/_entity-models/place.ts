import { TravelRoute } from "./travel-routes";

export interface Place{
    id : number;
    name : string;
    travelRoutes : TravelRoute[];
}