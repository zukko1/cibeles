import { Injectable } from '@angular/core';
import { Hotel } from '../../_models/_entity-models/hotel';
import { ServiceBase } from '../base.service';
import { EntityURI } from '../../_common/enumeradores.enum';
import { MessageService } from '../messages/message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService extends ServiceBase<Hotel> {

  public getModel(): string {
    return EntityURI.PLANS;
  }

  constructor(public httpClient: HttpClient,
              public messageService: MessageService) {
    super(httpClient, messageService);
  }
}
