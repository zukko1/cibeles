import { Component, OnInit } from '@angular/core';
import { Urls } from '../../_common/routes';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-internal-layout',
  templateUrl: './internal-layout.component.html',
  styleUrls: ['./internal-layout.component.css']
})
export class InternalLayoutComponent implements OnInit {

  urls = Urls;
  
  constructor(
  ) { 
    this.urls.DETALLE_VUELO;
  }

  ngOnInit() {
  }

}
