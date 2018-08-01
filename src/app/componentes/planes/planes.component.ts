import { Component, OnInit, OnDestroy } from '@angular/core';
import { Travel } from '../../_models/_entity-models/travel';
import { TravelController } from '../../_controllers/travel.controller';

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
    public travelController : TravelController
  ) { }

  getDays(startDate : Date, finishDate : Date){
    return 0;
  }

  ngOnInit() {
    this.travelController.loadTravels();

    this.travelController.groupSubject.subscribe(
      travels => {
        this.groupTravels = travels;
        console.log(this.groupTravels);
      }
    );

    this.travelController.aloneSubject.subscribe(
      travels => {
        this.aloneTravels = travels;
        console.log(this.aloneTravels);
      }
    )

    this.travelController.groupFlySubject.subscribe(
      travels => {
        this.groupFlyTravels = travels;
        console.log(this.groupFlyTravels);
      }
    )
  }

  ngOnDestroy(): void {
    this.travelController.groupSubject.unsubscribe();
    this.travelController.starredSubject.unsubscribe();
  }
}
