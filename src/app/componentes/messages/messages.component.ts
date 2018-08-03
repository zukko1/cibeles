import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../../_services/messages/message.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  private subscription: Subscription;
  public message: any = null;

  constructor(public messageService : MessageService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if(message){
        this.message = message;
        this.snackBar.open(message.text, message.type,{duration: 2000});
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
