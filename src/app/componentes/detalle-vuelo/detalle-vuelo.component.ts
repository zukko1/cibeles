import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelController } from '../../_controllers/travel.controller';
import { Travel } from '../../_models/_entity-models/travel';
import { RouteService } from '../../_services/routes/route.service';
import { PlacesService } from '../../_services/places/places.service';
import { TravelDateService } from '../../_services/travel-date/travel-date.service';
import { Subject } from 'rxjs';
import { TavelDate } from '../../_models/_entity-models/travelDate';
import { ScheduleService } from '../../_services/schedule/schedule.service';
import { ScheduleController } from '../../_controllers/schedule.controller';
import { Schedule } from '../../_models/_entity-models/schedule';
import { SearchBarController } from '../../_controllers/search-bar.controller';
import { Utils } from '../../_common/util';

@Component({
  selector: 'app-detalle-vuelo',
  templateUrl: './detalle-vuelo.component.html',
  styleUrls: ['./detalle-vuelo.component.css']
})
export class DetalleVueloComponent implements OnInit {

  public travel : Travel;
  public travels : Travel[];
  public schedule : Schedule;
  public travelSubject : Subject<Travel> = new Subject<Travel>();
  public scheduleSubject : Subject<Schedule> = new Subject<Schedule>();
  public dates : TavelDate[] = [];  
  public pickerDateSubject : Subject<string>;
  public Utils = Utils;

  constructor(
    public route : ActivatedRoute,
    public travelController : TravelController,
    public routeService : RouteService,
    public placeServices : PlacesService,
    public travelDates : TravelDateService,
    public scheduleController : ScheduleController,
    public searchBar : SearchBarController
  ) { }

  ngOnInit() {
    this.getTravel();
    this.travelSubject.subscribe(travel=>{
      this.setUpTravelInfo(travel);
      this.travel = travel;
    });
  }

  setUpTravelInfo(travel : Travel){    
    this.scheduleSubject.subscribe(
      schedule =>{
        this.schedule = schedule;
        this.scheduleSubject.unsubscribe();
      }
    )    
    this.scheduleController.GetScheduleById(travel.plan.idSchedule.toString(), this.scheduleSubject);
    this.searchBar.loadResources().subscribe(
      result => {
        this.dates = result[2]['hydra:member'];
        this.dates = this.dates.filter(e=>e.travels.includes(this.travel));
      }
    )
  }

  getTravel(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.travelController.loadResources().subscribe(
      result => {
        this.travels = result[0]['hydra:member'];   
        this.travel = this.travels.find(e=>e.id == id)
        this.travelSubject.next(this.travel);
      }
    )
  }

  getDays(startDate : string, finishDate : string){
    return Utils.getDays(finishDate, startDate);
  }

  getDate(dateStr :string){
      let date = new Date(dateStr);
      return date.toLocaleDateString();
  }
}
