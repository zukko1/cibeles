import {Injectable} from '@angular/core';
import {ServiceBase} from '../base.service';
import {Service} from '../../_models/_entity-models/service';
import {EntityURI} from '../../_common/enumeradores.enum';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../messages/message.service';
import { Plan } from '../../_models/_entity-models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlansService extends ServiceBase<Plan> {

  public getModel(): string {
    return EntityURI.PLANS;
  }

  constructor(public httpClient: HttpClient,
              public messageService: MessageService) {
    super(httpClient, messageService);
  }
}
