import { Component, OnInit, OnDestroy } from '@angular/core';
import { TravelController } from '../../_controllers/travel.controller';
import { Travel } from '../../_models/_entity-models/travel';
import { Utils } from '../../_common/util';
import { Router } from '@angular/router';
import { Urls } from '../../_common/routes';

declare var StartSlick;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

  public groupTravels : Travel[];
  public starredTravels : Travel[];

  public loadingGroups = true;
  
  constructor(
    public travelController : TravelController,
    public router : Router
  ) { }

  ngOnInit() {
    this.travelController.loadTravels();

    this.travelController.groupSubject.subscribe(
      travels => {
        this.groupTravels = travels;
      }
    );

    this.travelController.starredSubject.subscribe(
      travels => {
        this.starredTravels = travels;
      }
    )
    StartSlick();
  }

  ngOnDestroy(): void {
    // this.travelController.groupSubject.unsubscribe();
    // this.travelController.starredSubject.unsubscribe();
  }

  getDays(startDate : string, finishDate : string){
    return Utils.getDays(finishDate, startDate);
  }

  seeMore(id : string){
    this.router.navigateByUrl(Urls.DETALLE_VUELO + '/' + id);
  }
}
