import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {MatDialog, MatPaginator, PageEvent} from '@angular/material';
import {tap} from 'rxjs/internal/operators';
import {PlanDataSource} from '../../../_datasources/plan.datasource';
import {PlansService} from '../../../_services/plans/plans.service';
import {Plan} from '../../../_models/_entity-models/plan';
import {Urls} from '../../../_common/routes';


@Component({
  selector: 'app-client-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id',
    'name',
    'description',
    'actions'];

  urls = Urls;
  title = 'Planes';
  dataSource: PlanDataSource;
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public plansService: PlansService) {

  }

  static openDialog(): void {
    console.log('holi');
  }

  ngOnInit() {
    this.dataSource = new PlanDataSource(this.plansService);
    this.dataSource.load();
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadPage())
      )
      .subscribe();
  }

  loadPage() {
    if (this.pageEvent.previousPageIndex < this.pageEvent.pageIndex) {
      this.dataSource.loadPage(this.dataSource.view['hydra:next']);
    } else {
      this.dataSource.loadPage(this.dataSource.view['hydra:previous']);
    }
  }
}
