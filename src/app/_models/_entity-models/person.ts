import { ModelBase } from "../model-base";
import { Cost } from "./cost";

export interface Person extends ModelBase{
    
    id : number;
    description : string;
    costs : Cost[];
}