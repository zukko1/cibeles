import { ModelBase } from "../model-base";

export interface MediaObject extends ModelBase{
    
    file : string;
    contentUrl : string;
    id : number;
    services : string[];
}