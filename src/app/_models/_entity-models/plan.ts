import { ModelBase } from "../model-base";
import { Travel } from "./travel";

export interface Plan extends ModelBase{
    id : number;
    idSchedule : number;
    name : string;
    description : string;
    travels : Travel[];
    imgPpal : string;
    multimedia : string[];
    multimediaNames : string[];
    imgPpalName : string;
}