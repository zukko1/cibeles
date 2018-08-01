import { Component, OnInit, Input } from '@angular/core';
import { TavelDate } from '../../_models/_entity-models/travelDate';
import { Months } from '../../_common/enumeradores.enum';
import { Utils } from '../../_common/util';
import { Subject } from 'rxjs';

@Component({
  selector: 'travel-dates-picker',
  templateUrl: './travel-dates-picker.component.html',
  styleUrls: ['./travel-dates-picker.component.css']
})
export class TravelDatesPickerComponent implements OnInit {

  @Input() public dates : TavelDate[] = [];
  @Input() public parentSubject : Subject<string>;
  public showDates : TavelDate[] = [];
  public currentDate : Date = new Date(Date.now()).getDate() == 1? new Date(Date.now() + Utils.dayInMiliseconds()) : new Date(Date.now()); 
  public month : string = Months[this.currentDate.getMonth()+1];
  public year : number = this.currentDate.getFullYear();
  constructor() { }

  ngOnInit() {
  }

  previusMonth(){ 
    this.currentDate = Utils.restMonth(this.currentDate); 
    this.updateValues();
    
  }

  nextMonth(){ 
    this.currentDate = Utils.aggregateMonth(this.currentDate); 
    this.updateValues();
  }

  public updateValues(){
    this.showDates = this.dates.filter(e => this.isCurrentMonthAndYearDate(e.startDate))
    this.month = Months[this.currentDate.getMonth()+1];
    this.year = this.currentDate.getFullYear();
  }

  isCurrentMonthAndYearDate(dateStr : Date){
    var date = new Date(dateStr);
    return date.getMonth() == this.currentDate.getMonth() && date.getFullYear() == this.currentDate.getFullYear();
  }

  getButtonText(startDate : string, finishDate : string) : string{
    return (new Date(startDate).toLocaleDateString() + " - " + new Date(finishDate).toLocaleDateString());
  }

  selectDate(idTravelDate : string){
    this.parentSubject.next(idTravelDate);
  }
}
