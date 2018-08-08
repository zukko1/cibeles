import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Urls} from '../_common/routes';
import {Schedule} from '../_models/_entity-models/schedule';
import {ScheduleService} from '../_services/schedule/schedule.service';
import {DayService} from '../_services/day/day.service';
import {Subject} from 'rxjs';


@Injectable()
export class ScheduleController {
  constructor(public router: Router,
              public scheduleService: ScheduleService,
              public dayService: DayService) {
  }

  GetScheduleById(idSchedule: string, subject: Subject<Schedule>) {
    this.dayService.GetList().subscribe(
      days => {
        const daysResponse = days['hydra:member'];
        const daysToSet = daysResponse.filter(e => e.idSchedule === idSchedule);
        this.scheduleService.GetEntityByIdStanard<Schedule>(idSchedule).subscribe(
          result => {
            const response: Schedule = result;
            response.days = daysToSet;
            subject.next(response);
          }
        );
      }
    );
  }
}
