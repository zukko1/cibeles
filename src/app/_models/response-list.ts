import {ResponseBase} from './response-base';
import {ModelBase} from './model-base';
import {HydraSearch} from './hydra-search';

export interface ResponseList<E> extends ResponseBase {
  'hydra:member': [E];
  'hydra:totalitems': number;
  'hydra:search': HydraSearch;
}
