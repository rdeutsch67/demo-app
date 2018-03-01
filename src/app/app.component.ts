import { Component } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html'
  /*styleUrls: ['./app.component.css']*/
})

export class AppComponent {
  title = 'Flightbooking';

  public showWaitInfo: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe(
      (event) => {

        console.debug('router-event', event);
        if (event instanceof NavigationStart) {
          this.showWaitInfo = true;
        }
        if (event instanceof NavigationEnd
          || event instanceof NavigationCancel
          || event instanceof NavigationError) {
          this.showWaitInfo = false;
        }
      }
    )
  }


}
