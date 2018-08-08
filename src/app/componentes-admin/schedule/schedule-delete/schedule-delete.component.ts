import {Component, Inject, OnInit} from '@angular/core';
import {ScheduleEditComponent} from '../schedule-edit/schedule-edit.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {ScheduleService} from '../../../_services/schedule/schedule.service';
import {MessageService} from '../../../_services/messages/message.service';

@Component({
  selector: 'app-schedule-delete',
  templateUrl: './schedule-delete.component.html',
  styleUrls: ['./schedule-delete.component.css']
})
export class ScheduleDeleteComponent {

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  constructor(public dialogRef: MatDialogRef<ScheduleDeleteComponent>,
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
    this.scheduleService.Delete(this.data.schedule.id).subscribe(
      result => {
        this.messageService.success('Itinerario eliminado');
        this.dialogRef.close(true);
      }, error => {
        this.messageService.error('Intentelo nuevamente');
      }
    );
  }

}
