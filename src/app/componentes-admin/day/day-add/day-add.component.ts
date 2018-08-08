import {Component, Inject, OnInit} from '@angular/core';
import {Day} from '../../../_models/_entity-models/day';
import {DayService} from '../../../_services/day/day.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {MessageService} from '../../../_services/messages/message.service';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-day-add',
  templateUrl: './day-add.component.html',
  styleUrls: ['./day-add.component.css']
})
export class DayAddComponent {

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  constructor(public dialogRef: MatDialogRef<DayAddComponent>,
              @Inject(MAT_DIALOG_DATA) public day: Day,
              @Inject(MAT_DIALOG_DATA) public data,
              private dayService: DayService,
              public messageService: MessageService) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  public confirmAdd() {
    this.day.idSchedule = environment.baseURL + environment.baseAPIUrl + 'api/schedules/'+this.data.ids;
    this.dayService.Save(this.day).subscribe(
      result => {
        this.messageService.success('Dia creado');
        this.dialogRef.close(true);
      }, error => {
        this.messageService.error('Intentelo nuevamente');
      }
    );

  }

}
