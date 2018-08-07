import {ResponseBase} from './response-base';

export interface ResponseView extends ResponseBase {
  'hydra:first': string;
  'hydra:last': string;
  'hydra:next': string;
}
