import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomPreloadingStrategy} from './shared/custom-preloading-strategy';

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

//export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);

/*export const AppRouterModule = RouterModule.forRoot(APP_ROUTES,
  { preloadingStrategy: PreloadAllModules
  });*/

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES, {
  preloadingStrategy: CustomPreloadingStrategy });

export const APP_ROUTES_MODULE_PROVIDER = [CustomPreloadingStrategy];
