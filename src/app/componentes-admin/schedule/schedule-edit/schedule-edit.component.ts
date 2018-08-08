import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Schedule} from '../../../_models/_entity-models/schedule';
import {ScheduleService} from '../../../_services/schedule/schedule.service';
import {MessageService} from '../../../_services/messages/message.service';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent {

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  constructor(public dialogRef: MatDialogRef<ScheduleEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
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
    this.scheduleService.Update(this.data.schedule, this.data.schedule.id).subscribe(
      result => {
        this.messageService.success('Itinerario editado');
        this.dialogRef.close(result.id);
      }, error => {
        this.messageService.error('Intentelo nuevamente');
      }
    );
  }
}
