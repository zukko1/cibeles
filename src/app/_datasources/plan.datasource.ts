import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs/index';
import {catchError, finalize} from 'rxjs/internal/operators';
import {Plan} from '../_models/_entity-models/plan';
import {PlansService} from '../_services/plans/plans.service';
import {ResponseList} from '../_models/response-list';
import {ResponseView} from '../_models/response-view';

export class PlanDataSource implements DataSource<Plan> {

  private plansSubject = new BehaviorSubject<Plan[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private lengthSubject = new BehaviorSubject<number>(1);
  private sizeSubject = new BehaviorSubject<number>(10);
  plans: Plan[];
  list: ResponseList<Plan>;
  view: ResponseView;

  public loading$ = this.loadingSubject.asObservable();
  public length$ = this.lengthSubject.asObservable();
  public size$ = this.sizeSubject.asObservable();

  constructor(public planService: PlansService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Plan[]> {
    return this.plansSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.plansSubject.complete();
    this.loadingSubject.complete();
    this.lengthSubject.complete();
    this.sizeSubject.complete();
  }

  load() {
    this.loadingSubject.next(true);

    this.planService.GetList()
      .pipe(
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        restItems => {
          this.list = restItems;
          this.view = this.list['hydra:view'];
          this.plans = this.list['hydra:member'];
          this.plansSubject.next(this.plans);
          this.sizeSubject.next(this.plans.length);
          this.lengthSubject.next(this.list['hydra:totalItems']);
        }
      );

  }


  loadPage(url) {
    this.loadingSubject.next(true);
    this.planService.getCollection(url)
      .pipe(
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        restItems => {
          this.list = restItems;
          this.view = this.list['hydra:view'];
          this.plans = this.list['hydra:member'];
          this.plansSubject.next(this.plans);
          this.sizeSubject.next(this.plans.length);
          this.lengthSubject.next(this.list['hydra:totalItems']);
        }
      );
  }
}
