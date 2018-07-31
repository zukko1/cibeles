import { Place } from "../_entity-models/place";
import { TavelDate } from "../_entity-models/travelDate";
import { TravelRoute } from "../_entity-models/travel-routes";

export class SearchBarOptions{
    transport : string[];
    origin : Place[];
    destiny : Place[];
    dates : TavelDate[];
    rooms : number;
    people : number;

    constructor(){
        this.transport = [];
        this.origin = [];
        this.destiny = [];
        this.dates = [];
    }
}