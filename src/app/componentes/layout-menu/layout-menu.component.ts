import { Component, OnInit } from '@angular/core';
import { Urls } from '../../_common/routes';

@Component({
  selector: 'layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.css']
})
export class LayoutMenuComponent implements OnInit {

  urls = Urls;
  constructor() { }

  ngOnInit() {
  }

}
