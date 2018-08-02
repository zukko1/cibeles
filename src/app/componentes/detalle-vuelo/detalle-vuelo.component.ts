import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelController } from '../../_controllers/travel.controller';
import { Travel } from '../../_models/_entity-models/travel';

@Component({
  selector: 'app-detalle-vuelo',
  templateUrl: './detalle-vuelo.component.html',
  styleUrls: ['./detalle-vuelo.component.css']
})
export class DetalleVueloComponent implements OnInit {

  public travel : Travel;

  constructor(
    public route : ActivatedRoute,
    public travelController : TravelController
  ) { }

  ngOnInit() {
    this.getTravel();
  }

  getTravel(){
    const id = this.route.snapshot.paramMap.get('id');
    this.travelController.getTravelById(id).subscribe(
      travel =>{
        this.travel = travel;
        console.log("this.travel");      
        console.log(this.travel);        
      }
    )
  }
}
