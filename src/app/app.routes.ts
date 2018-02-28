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
    data: {
      preload: true
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES, {
  preloadingStrategy: CustomPreloadingStrategy });

export const APP_ROUTES_MODULE_PROVIDER = [CustomPreloadingStrategy];
