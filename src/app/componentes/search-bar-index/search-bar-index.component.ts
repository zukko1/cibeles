import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchBarFilters } from '../../_models/search-bar/searchBarFilters';
import { SearchBarController } from '../../_controllers/search-bar.controller';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { Urls } from '../../_common/routes';
import { SearchBarOptions } from '../../_models/search-bar/searchBarOptions';
import { Subject } from 'rxjs';
import { networkInterfaces } from 'os';

@Component({
  selector: 'search-bar-index',
  templateUrl: './search-bar-index.component.html',
  styleUrls: ['./search-bar-index.component.css'],
  animations: [
    trigger('show-personalizedControl', [
      state('hide', style({
        display: 'none',
        opacity: 0,
        bottom: 0
      })),
      state('show',   style({
        bottom: -118,
        display: 'block',
        opacity: 1
      })),
      transition('hide => show', animate('0.4s ease-in')),
      transition('show => hide', animate('0.4s ease-out'))
    ])
  ]
})
export class SearchBarIndexComponent implements OnInit, OnDestroy {

  public filters : SearchBarFilters;
  public showrooms : string = 'hide';
  public showouts : string = 'hide';
  public internalPage : boolean = true;
  public options : SearchBarOptions;
  public parentSubject = new Subject<string>();
  public roomsSelectorSubject = new Subject<number>();

  constructor(
    public searchBarController : SearchBarController,
    public router : Router
  ) {     
  }

  ngOnInit() {
    this.filters = new SearchBarFilters();
    this.internalPage = this.router.url != Urls.INDEX;
    this.options = this.options != null? this.options : new SearchBarOptions();
    this.loadOptions();
    this.parentSubject.subscribe(
      idTravelDate =>{
        this.filters.idTravelDate = idTravelDate;
        this.showOuts();        
      }
    );
    this.roomsSelectorSubject.subscribe(
      number =>{
        this.filters.peopleNumber += number;
      }
    )
  }

  ngOnDestroy(): void {
    this.parentSubject.unsubscribe();
    this.roomsSelectorSubject.unsubscribe();
  }

  search(){
    this.searchBarController.search(this.filters);
  }
  
  loadOptions(){
    this.searchBarController.loadOptions(this.options);
  }

  selectOrigen(event){    
    this.searchBarController.loadDestinies(this.options, event);
  }

  selectDestiny(event){
    this.searchBarController.loadDates(this.options, this.filters.idOrigen, event);
  }

  showRooms(){
    this.showrooms = this.showrooms == 'hide'? 'show' : 'hide';
  }

  showOuts(){
    this.showouts = this.showouts == 'hide'? 'show' : 'hide';
  }
}
