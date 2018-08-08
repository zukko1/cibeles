import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs/index';
import {catchError, finalize} from 'rxjs/internal/operators';
import {Day} from '../_models/_entity-models/day';
import {ResponseList} from '../_models/response-list';
import {ResponseView} from '../_models/response-view';
import {DayService} from '../_services/day/day.service';

export class DayDataSource implements DataSource<Day> {

  private daysSubject = new BehaviorSubject<Day[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private lengthSubject = new BehaviorSubject<number>(1);
  private sizeSubject = new BehaviorSubject<number>(10);
  days: Day[];
  list: ResponseList<Day>;
  view: ResponseView;

  public loading$ = this.loadingSubject.asObservable();
  public length$ = this.lengthSubject.asObservable();
  public size$ = this.sizeSubject.asObservable();

  constructor(public daysService: DayService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Day[]> {
    return this.daysSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.daysSubject.complete();
    this.loadingSubject.complete();
    this.lengthSubject.complete();
    this.sizeSubject.complete();
  }

  load(idSchedule) {
    this.loadingSubject.next(true);

    this.daysService.getBySchedule(idSchedule)
      .pipe(
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        restItems => {
          this.list = restItems;
          this.view = this.list['hydra:view'];
          this.days = this.list['hydra:member'];
          this.daysSubject.next(this.days);
          this.sizeSubject.next(this.days.length);
          this.lengthSubject.next(this.list['hydra:totalItems']);
        }
      );
  }
}
