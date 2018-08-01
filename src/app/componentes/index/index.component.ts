import { Component, OnInit, OnDestroy } from '@angular/core';
import { TravelController } from '../../_controllers/travel.controller';
import { Travel } from '../../_models/_entity-models/travel';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

  public groupTravels : Travel[];
  public starredTravels : Travel[];

  constructor(
    public travelController : TravelController
  ) { }

  ngOnInit() {
    this.travelController.loadTravels();

    this.travelController.groupSubject.subscribe(
      travels => {
        this.groupTravels = travels;
        console.log(this.groupTravels);
      }
    );
    
    this.travelController.starredSubject.subscribe(
      travels => {
        this.starredTravels = travels;
        console.log(this.starredTravels);
      }
    )
  }

  ngOnDestroy(): void {
    this.travelController.groupSubject.unsubscribe();
    this.travelController.starredSubject.unsubscribe();
  }

  getDays(startDate : Date, finishDate : Date){
    return 0;
  }

}
