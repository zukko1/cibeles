import { Component, OnInit } from '@angular/core';
import { Urls } from '../../_common/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urls = Urls;
  constructor() { }

  ngOnInit() {
  }

}
