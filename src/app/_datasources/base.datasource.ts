import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { UsersService } from '../_services/users/users.service';
import { ResponseBase } from '../_models/response-base';
import { BehaviorSubject ,  Observable } from 'rxjs';
import { ModelBase } from '../_models/model-base';
import { ServiceBase } from '../_services/base.service';

export class BaseDataSource<M> implements DataSource<ResponseBase> {
  
  private usersSubject = new BehaviorSubject<ResponseBase[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private lengthSubject = new BehaviorSubject<number>(1);
  models: ModelBase[];
  rooObject: ResponseBase;

  public loading$ = this.loadingSubject.asObservable();
  public length$ = this.lengthSubject.asObservable();

  constructor(public service: ServiceBase<M>) {
  }

  connect(collectionViewer: CollectionViewer): Observable<ResponseBase[]> {
    return this.usersSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.usersSubject.complete();
    this.loadingSubject.complete();
    this.lengthSubject.complete();
  }

  load() {
    this.loadingSubject.next(true);
    this.service.GetList()
      .subscribe(
        (response: ResponseBase) => {
          this.models = response['hydra:member'];
          this.usersSubject.next(this.models);
          this.lengthSubject.next(this.rooObject['hydra:totalItems']);
        }
      );
  }

  loadPage() {
    this.loadingSubject.next(true);
    this.service.GetList()
      .subscribe(
        (response: ResponseBase) => {
          this.models = response['hydra:member'];
          this.usersSubject.next(this.models);
          this.lengthSubject.next(this.rooObject['hydra:totalItems']);
        }
      );
  }
}
