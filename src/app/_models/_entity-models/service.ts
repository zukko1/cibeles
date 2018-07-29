import { ModelBase } from "../model-base";

export interface Service extends ModelBase{
    idService : number;
    name : string;
    description : string;
    ico : string;
}