import {Component, OnInit} from '@angular/core';
import {DayDataSource} from '../../../_datasources/day.datasource';
import {DayService} from '../../../_services/day/day.service';
import {PlansService} from '../../../_services/plans/plans.service';
import {Schedule} from '../../../_models/_entity-models/schedule';
import {ScheduleService} from '../../../_services/schedule/schedule.service';
import {MatDialog} from '@angular/material';
import {ScheduleAddComponent} from '../../schedule/schedule-add/schedule-add.component';

@Component({
  selector: 'app-plan-add',
  templateUrl: './plan-add.component.html',
  styleUrls: ['./plan-add.component.scss']
})
export class PlanAddComponent implements OnInit {

  title = 'Crear Nuevo Plan';
  labelPositionCheckBox = 'before';
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  schedules: Schedule[];
  displayedColumns: string[] = [
    'name',
    'actions'];
  dataSource: DayDataSource;
  selectedSchedule;
  schedule: Schedule;


  constructor(public plansService: PlansService,
              public daysService: DayService,
              public schedulesService: ScheduleService,
              public dialogAddSchedule: MatDialog) {
  }

  ngOnInit() {
    this.dataSource = new DayDataSource(this.daysService);
    this.schedulesService.GetListWithoutPaginator()
      .subscribe(
        restItems => {
          this.schedules = restItems['hydra:member'];
        }
      );
  }

  openDialogAddSchedule(): void {
    const dialogRef = this.dialogAddSchedule.open(ScheduleAddComponent, {
      data: {schedule: this.schedule}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dataSource.load(result);
      this.schedulesService.GetListWithoutPaginator()
        .subscribe(
          restItems => {
            this.schedules = restItems['hydra:member'];
            this.selectedSchedule = result;
          }
        );
    });
  }

  selectOrigen(event) {
    this.dataSource.load(event);
  }

}
