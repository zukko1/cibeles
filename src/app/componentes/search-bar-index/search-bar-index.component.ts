import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchBarFilters } from '../../_models/search-bar/searchBarFilters';
import { SearchBarController } from '../../_controllers/search-bar.controller';

@Component({
  selector: 'search-bar-index',
  templateUrl: './search-bar-index.component.html',
  styleUrls: ['./search-bar-index.component.css']
})
export class SearchBarIndexComponent implements OnInit, OnDestroy {

  public filters : SearchBarFilters;

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

}
