import { ModelBase } from "../model-base";
import { Travel } from "./travel";

export interface Hotel extends ModelBase { 
    id : number;
    name : string;
    travels : Travel[];
}