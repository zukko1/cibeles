import { Component, OnInit, Input } from '@angular/core';
import { Travel } from '../../_models/_entity-models/travel';
import { Router } from '@angular/router';
import { Urls } from '../../_common/routes';
import { Utils } from '../../_common/util';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.css']
})
export class SearchResultItemComponent implements OnInit {

  @Input() travel : Travel;
  constructor(
    public router : Router
  ) { }

  ngOnInit() {
  }

  getDays(date, date2){
    return Utils.getDays(date2, date);
}
  getDate(dateStr :string){
      let date = new Date(dateStr);
      return date.toLocaleDateString();
  }

  seeMore(id : string){
    this.router.navigateByUrl(Urls.DETALLE_VUELO + '/' + id);
  }
}
