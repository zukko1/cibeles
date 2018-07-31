import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchBarFilters } from '../../_models/search-bar/searchBarFilters';
import { SearchBarController } from '../../_controllers/search-bar.controller';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { Urls } from '../../_common/routes';
import { SearchBarOptions } from '../../_models/search-bar/searchBarOptions';

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
  public internalPage : boolean = true;
  public options : SearchBarOptions;

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
  }

  ngOnDestroy(): void {
  }

  search(){
    this.searchBarController.search(this.filters);
  }

  showRooms(){
    this.showrooms = this.showrooms == 'hide'? 'show' : 'hide';
  }

  loadOptions(){
    this.searchBarController.loadOptions(this.options);
  }
}
