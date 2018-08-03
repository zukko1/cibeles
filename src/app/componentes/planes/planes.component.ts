import { Component, OnInit, OnDestroy } from '@angular/core';
import { Travel } from '../../_models/_entity-models/travel';
import { TravelController } from '../../_controllers/travel.controller';
import { Urls } from '../../_common/routes';
import { Router } from '@angular/router';
import { Utils } from '../../_common/util';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit, OnDestroy {

  public groupTravels : Travel[];
  public groupFlyTravels : Travel[];
  public aloneTravels : Travel[];

  constructor(
    public travelController : TravelController,
    public router : Router
  ) { }

  getDays(startDate : string, finishDate : string){
    return Utils.getDays(finishDate, startDate);
  }

  ngOnInit() {
    this.travelController.loadTravels();

    this.travelController.groupSubject.subscribe(
      travels => {
        this.groupTravels = travels;
        console.log("this.groupTravels");
        console.log(this.groupTravels);
      }
    );

    this.travelController.aloneSubject.subscribe(
      travels => {
        this.aloneTravels = travels;
        console.log("this.aloneTravels");
        console.log(this.aloneTravels);
      }
    )

    this.travelController.groupFlySubject.subscribe(
      travels => {
        this.groupFlyTravels = travels;
        console.log("this.groupFlyTravels");
        console.log(this.groupFlyTravels);
      }
    )
  }

  ngOnDestroy(): void {
    this.travelController.groupSubject.unsubscribe();
    this.travelController.starredSubject.unsubscribe();
  }

  seeMore(id : string){
    this.router.navigateByUrl(Urls.DETALLE_VUELO + '/' + id);
  }
}
