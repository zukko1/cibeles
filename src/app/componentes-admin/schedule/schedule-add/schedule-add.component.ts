import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ScheduleService} from '../../../_services/schedule/schedule.service';
import {User} from '../../../_models/user';
import {Schedule} from '../../../_models/_entity-models/schedule';
import {MessageService} from '../../../_services/messages/message.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-schedule-add',
  templateUrl: './schedule-add.component.html',
  styleUrls: ['./schedule-add.component.css']
})
export class ScheduleAddComponent {

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  constructor(public dialogRef: MatDialogRef<ScheduleAddComponent>,
              @Inject(MAT_DIALOG_DATA) public schedule: Schedule,
              private scheduleService: ScheduleService,
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
    this.scheduleService.Save(this.schedule).subscribe(
      result => {
        this.messageService.success('Itinerario creado');
        this.dialogRef.close(result.id);
      }, error => {
        this.messageService.error('Intentelo nuevamente');
      }
    );

  }

}
