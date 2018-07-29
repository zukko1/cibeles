import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchBarFilters } from '../../_models/search-bar/searchBarFilters';
import { SearchBarController } from '../../_controllers/search-bar.controller';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'search-bar-index',
  templateUrl: './search-bar-index.component.html',
  styleUrls: ['./search-bar-index.component.css'],
  animations: [
    trigger('show-rooms', [
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

  constructor(public searchBarController : SearchBarController) { 
  }

  ngOnInit() {
    this.filters = new SearchBarFilters();
  }

  ngOnDestroy(): void {
  }

  search(){
    this.searchBarController.Buscar(this.filters);
  }

  showRooms(){
    this.showrooms = this.showrooms == 'hide'? 'show' : 'hide';
  }
}
