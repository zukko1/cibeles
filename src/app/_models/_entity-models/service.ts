import { ModelBase } from "../model-base";

export interface Service extends ModelBase{

    id : number;
    includeServices : Service[];
    name : string;
    description : string;
    ico : string;
}