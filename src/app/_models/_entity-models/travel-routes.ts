import { Travel } from "./travel";

export interface TravelRoute{
    id: number;
    Origin : string;
    Destination : string;
    travels : Travel[];
    transport : number;
}