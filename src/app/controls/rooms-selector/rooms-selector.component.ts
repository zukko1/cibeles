import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { MessageService } from '../../_services/messages/message.service';

@Component({
  selector: 'rooms-selector',
  templateUrl: './rooms-selector.component.html',
  styleUrls: ['./rooms-selector.component.css']
})
export class RoomsSelectorComponent implements OnInit {

  @Input() parentSubject : Subject<number>;
  public numberRooms : number = 0;
  public numberPeople : number = 0;
  constructor(public messageService : MessageService) { }

  ngOnInit() {
  }

  aggregateRooms(number){
    if(this.numberRooms > 0 || number > 0){
      this.numberRooms += number;
    }else{
      this.messageService.error("No se puede tener una cantidad de habitaciones negativas");
    }
  }

  aggregatePeople(number){
    if(this.numberPeople > 0 || number > 0){
      this.numberPeople += number;
      this.parentSubject.next(number);
    }else{
      this.messageService.error("No se puede tener una cantidad de personas negativas");
    }
  }
}
