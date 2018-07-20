import { ModelBase } from "./model-base";
import { HydraSearch } from "./hydra-search";

export interface ResponseBase{
    '@context' : string;
    '@id' : string;
    '@type' : string;
}