import { Component, OnInit, OnDestroy } from '@angular/core';
import { TravelController } from '../../_controllers/travel.controller';
import { Travel } from '../../_models/_entity-models/travel';
import { Utils } from '../../_common/util';
import { Router } from '@angular/router';
import { Urls } from '../../_common/routes';

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
    
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = "../../../assets/js/slick.min.js";
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    var head = document.getElementsByTagName('head')[0]
    head.appendChild(node);
    console.log(head);
    console.log(node);
    
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
