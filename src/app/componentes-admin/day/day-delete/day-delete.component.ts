import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {DayService} from '../../../_services/day/day.service';
import {MessageService} from '../../../_services/messages/message.service';

@Component({
  selector: 'app-day-delete',
  templateUrl: './day-delete.component.html',
  styleUrls: ['./day-delete.component.css']
})
export class DayDeleteComponent implements OnInit {

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  constructor(public dialogRef: MatDialogRef<DayDeleteComponent>,
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
    this.dayService.Delete(this.data.day.id).subscribe(
      result => {
        this.messageService.success('Dia eliminado');
        this.dialogRef.close();
      }, error => {
        this.messageService.error('Intentelo nuevamente');
      }
    );
  }

}
