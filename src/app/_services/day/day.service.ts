import {Injectable} from '@angular/core';
import {ServiceBase} from '../base.service';
import {Day} from '../../_models/_entity-models/day';
import {MessageService} from '../messages/message.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {EntityURI} from '../../_common/enumeradores.enum';
import {ResponseList} from '../../_models/response-list';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class DayService extends ServiceBase<Day> {

  constructor(httpClient: HttpClient,
              messageService: MessageService) {
    super(httpClient, messageService);
  }

  getModel() {
    return EntityURI.DAYS;
  }

  public getBySchedule(idSchedule) {
    let Params = new HttpParams();
    Params = Params.append('idSchedule.id', idSchedule);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<ResponseList<Day>>(
      this.PathBase + this.getModel(),
      {
        params: Params
      }
    );
  }
}
