import {Component, Inject, OnInit} from '@angular/core';
import {MessageService} from '../../../_services/messages/message.service';
import {DayService} from '../../../_services/day/day.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-day-edit',
  templateUrl: './day-edit.component.html',
  styleUrls: ['./day-edit.component.css']
})
export class DayEditComponent implements OnInit {

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  constructor(public dialogRef: MatDialogRef<DayEditComponent>,
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
    this.dayService.Update(this.data.day, this.data.day.id).subscribe(
      result => {
        this.messageService.success('Dia editado');
        this.dialogRef.close(result.id);
      }, error => {
        this.messageService.error('Intentelo nuevamente');
      }
    );
  }

}
