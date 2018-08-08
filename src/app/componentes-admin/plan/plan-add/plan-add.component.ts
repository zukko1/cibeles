import {Component, OnInit} from '@angular/core';
import {DayDataSource} from '../../../_datasources/day.datasource';
import {DayService} from '../../../_services/day/day.service';
import {PlansService} from '../../../_services/plans/plans.service';
import {Schedule} from '../../../_models/_entity-models/schedule';
import {ScheduleService} from '../../../_services/schedule/schedule.service';
import {MatDialog} from '@angular/material';
import {ScheduleAddComponent} from '../../schedule/schedule-add/schedule-add.component';
import {ScheduleEditComponent} from '../../schedule/schedule-edit/schedule-edit.component';
import {isUndefined} from 'util';
import {ScheduleDeleteComponent} from '../../schedule/schedule-delete/schedule-delete.component';
import {DayAddComponent} from '../../day/day-add/day-add.component';
import {DayEditComponent} from '../../day/day-edit/day-edit.component';
import {DayDeleteComponent} from '../../day/day-delete/day-delete.component';
import {Service} from '../../../_models/_entity-models/service';
import {Day} from '../../../_models/_entity-models/day';
import {ServiceService} from '../../../_services/service/service.service';
import {environment} from '../../../../environments/environment';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-plan-add',
  templateUrl: './plan-add.component.html',
  styleUrls: ['./plan-add.component.scss']
})
export class PlanAddComponent implements OnInit {

  title = 'Crear Nuevo Plan';
  labelPositionCheckBox = 'before';
  services: Service[];
  schedules: Schedule[];
  displayedColumns: string[] = [
    'name',
    'actions'];
  dataDaySource: DayDataSource;
  selectedSchedule;
  schedule: Schedule;
  day: Day;
  media = environment.baseIP + environment.baseURL + environment.baseMediaUrl;

  constructor(public plansService: PlansService,
              public daysService: DayService,
              public schedulesService: ScheduleService,
              public servicesService: ServiceService,
              public dialogAddSchedule: MatDialog,
              public dialogEditSchedule: MatDialog,
              public dialogDeleteSchedule: MatDialog,
              public dialogAddDay: MatDialog,
              public dialogEditDay: MatDialog,
              public dialogDeleteDay: MatDialog) {
  }

  ngOnInit() {
    this.dataDaySource = new DayDataSource(this.daysService);
    this.schedulesService.GetListWithoutPaginator()
      .subscribe(
        restItems => {
          this.schedules = restItems['hydra:member'];
        }
      );
    this.servicesService.GetListWithoutPaginator()
      .subscribe(
        restItems => {
          this.services = restItems['hydra:member'];
        }
      );
  }

  openDialogAddSchedule(): void {
    const dialogRef = this.dialogAddSchedule.open(ScheduleAddComponent, {
      data: {schedule: this.schedule}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!isUndefined(resultdos)) {
        this.dataSource.load(result);
        this.schedulesService.GetListWithoutPaginator()
          .subscribe(
            restItems => {
              this.schedules = restItems['hydra:member'];
              this.selectedSchedule = result;
            }
          );
      }
    });
  }

  openDialogEditSchedule(): void {
    this.schedulesService.GetEntityById(this.selectedSchedule).subscribe(result => {
      const dialogRef = this.dialogEditSchedule.open(ScheduleEditComponent, {
        data: {schedule: result}
      });
      dialogRef.afterClosed().subscribe(resultdos => {
        if (!isUndefined(resultdos)) {
          this.dataSource.load(resultdos);
          this.schedulesService.GetListWithoutPaginator()
            .subscribe(
              restItems => {
                this.schedules = restItems['hydra:member'];
                this.selectedSchedule = resultdos;
              }
            );
        }
      });
    });

  }

  openDialogDeleteSchedule(): void {
    this.schedulesService.GetEntityById(this.selectedSchedule).subscribe(result => {
      const dialogRef = this.dialogDeleteSchedule.open(ScheduleDeleteComponent, {
        data: {schedule: result}
      });
      dialogRef.afterClosed().subscribe(resultdos => {
        if (!isUndefined(resultdos)) {
          this.dataSource.load(resultdos);
        }
        this.schedulesService.GetListWithoutPaginator()
          .subscribe(
            restItems => {
              this.schedules = restItems['hydra:member'];
              this.selectedSchedule = resultdos;
            }
          );
      });
    });
  }

  openDialogAddDay(): void {
    const dialogRef = this.dialogAddDay.open(DayAddComponent, {
      data: {day: this.day, ids: this.selectedSchedule}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!isUndefined(result)) {
        this.dataDaySource.load(this.selectedSchedule);
      }
    });
  }

  openDialogEditDay(id): void {
    this.daysService.GetEntityById(id).subscribe(result => {
      const dialogRef = this.dialogEditDay.open(DayEditComponent, {
        data: {day: result}
      });
      dialogRef.afterClosed().subscribe(resultdos => {
        if (!isUndefined(resultdos)) {
          this.dataDaySource.load(this.selectedSchedule);
        }
      });
    });

  }

  openDialogDeleteDay(id): void {
    this.daysService.GetEntityById(id).subscribe(result => {
      const dialogRef = this.dialogDeleteDay.open(DayDeleteComponent, {
        data: {day: result}
      });
      dialogRef.afterClosed().subscribe(resultdos => {
        this.dataDaySource.load(this.selectedSchedule);
      });
    });
  }

  selectOrigen(event) {
    this.selectedSchedule = event;
    this.dataDaySource.load(event);
  }

}
