import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchBarFilters } from '../../_models/search-bar/searchBarFilters';
import { SearchBarController } from '../../_controllers/search-bar.controller';

@Component({
  selector: 'search-bar-internal',
  templateUrl: './search-bar-internal.component.html',
  styleUrls: ['./search-bar-internal.component.css']
})
export class SearchBarInternalComponent implements OnInit, OnDestroy {

  public filters : SearchBarFilters;

  constructor(public searchBarController : SearchBarController) { 
  }

  ngOnInit() {
    this.filters = new SearchBarFilters();
  }

  ngOnDestroy(): void {
    
  }

  search(){
    this.searchBarController.search(this.filters);
  }
}
