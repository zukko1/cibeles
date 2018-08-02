import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs/index';
import {catchError, finalize} from 'rxjs/internal/operators';
import {PlansService} from '../_services/plans/plans.service';

export class PlanDataSource implements DataSource<Hydramember> {

  private plansSubject = new BehaviorSubject<Hydramember[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private lengthSubject = new BehaviorSubject<number>(1);
  plans: Hydramember[];
  rooObject: RootObject;
  view: Hydraview;

  public loading$ = this.loadingSubject.asObservable();
  public length$ = this.lengthSubject.asObservable();

  constructor(public plansService: PlansService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Hydramember[]> {
    return this.plansSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.plansSubject.complete();
    this.loadingSubject.complete();
    this.lengthSubject.complete();
  }

  load() {
    this.loadingSubject.next(true);

    this.plansService.GetList()
      .pipe(
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        restItems => {
          this.rooObject = restItems;
          this.view = this.rooObject['hydra:view'];
          this.plans = this.rooObject['hydra:member'];
          this.plansSubject.next(this.plans);
          this.lengthSubject.next(this.rooObject['hydra:totalItems']);
        }
      );

  }


  loadPage(url) {
    this.loadingSubject.next(true);
    this.plansService.getCollection(url)
      .pipe(
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        restItems => {
          this.rooObject = restItems;
          this.view = this.rooObject['hydra:view'];
          this.plans = this.rooObject['hydra:member'];
          this.plansSubject.next(this.plans);
          this.lengthSubject.next(this.rooObject['hydra:totalItems']);
        }
      );
  }
}
