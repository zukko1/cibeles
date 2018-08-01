import { Travel } from "./travel";
import { ModelBase } from "../model-base";

export interface TravelRoute extends ModelBase{
    id: number;
    Origin : string;
    Destination : string;
    travels : Travel[];
    transport : number;
}