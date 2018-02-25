import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-booking',
    loadChildren: './flight-booking/flight-booking.module#FlightBookingModule',
    // canLoad: [AuthLoadGuard]
  },

  /*{
    path: 'flight-booking',
    loadChildren: './flight-booking/flightbooking.module#FlightBookingModule'
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent
  },*/
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
