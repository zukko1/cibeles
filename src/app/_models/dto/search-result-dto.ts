import { Service } from "../_entity-models/service";

export interface SearchResultDto{
    planName : string;
    hotel : string;
    stardDate : Date;
    finishDate : Date;
    description : string;
    services : Service[];
    price : number;
}