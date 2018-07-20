import { Injectable } from '@angular/core';
import { MessageType } from '../../_common/enumeradores.enum';
import { Subject ,  Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable()
export class MessageService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject.next();
        }
      }
    });
  }

  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'Exito!', text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'Error!', text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }


}