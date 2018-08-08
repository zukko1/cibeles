import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../_models/_entity-models/hotel';
import { HotelService } from '../../_services/hotels/hotel.service';
import { TavelDate } from '../../_models/_entity-models/travelDate';
import { Plan } from '../../_models/_entity-models/plan';
import { TravelController } from '../../_controllers/travel.controller';
import { Transport, TravelType } from '../../_common/enumeradores.enum';
import { Travel } from '../../_models/_entity-models/travel';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  title = 'Crear Nuevo Viaje';
  public travel : Travel;
  public dates : TavelDate[] = [];
  public planes : Plan[] = [];
  public hotels : Hotel[] = [];
  public transport = [
    Transport[1],
    Transport[2]
  ];
  TravelType : TravelType;

  constructor(
    public travelController : TravelController
  ){}

  ngOnInit() {
    this.travelController.getDates(this.dates);
    this.travelController.getHotels(this.hotels);
    this.travelController.getPlanes(this.planes);
  }

}
