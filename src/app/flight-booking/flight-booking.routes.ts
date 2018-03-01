import {FlightSearchComponent} from './flight-search/flight-search.component';
import {PassengerSearchComponent} from './passenger-search/passenger-search.component';
import {RouterModule, Routes} from '@angular/router';
import {FlightBookingComponent} from './flight-booking.component';
import {FlightEditComponent} from './flight-edit/flight-edit.component';
import {AuthChildGuard} from '../shared/auth/auth.child.guard';
import {LeaveComponentGuard} from '../shared/deactivation/leave-component-guard';

const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    //path: 'flight-booking',
    path: '',
    component: FlightBookingComponent,
    canActivateChild: [AuthChildGuard],
    children: [
      {
        path: '',
        redirectTo: 'flight-search',
        pathMatch: 'full'
      },
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      },
      {
        path: 'flight-edit/:id',
        canDeactivate: [LeaveComponentGuard],
        component: FlightEditComponent
      }
    ]
  }
];

export let FlightBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);


/*const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent
  }
];

export const FlightBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);*/
