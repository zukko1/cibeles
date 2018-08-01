import { Component, OnInit, Input } from '@angular/core';
import { Travel } from '../../_models/_entity-models/travel';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.css']
})
export class SearchResultItemComponent implements OnInit {

  @Input() travel : Travel;
  constructor() { }

  ngOnInit() {
  }

  getDays(date, date3){
      return 0;
  }

  getDate(dateStr :string){
      let date = new Date(dateStr);
      return date.toLocaleDateString();
  }

}
