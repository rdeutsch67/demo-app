///<reference path="passenger-search/passenger-search.component.ts"/>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { DateComponent} from '../date/date.component';
import { FlightBookingRouterModule } from './flight-booking.routes';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightService } from './services/flight.service';
import {FlightBookingComponent} from './flight-booking.component';
import {FlightResolver} from './services/flight.resolver';
import {AuthGuard} from '../shared/auth/auth.guard';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    FlightBookingRouterModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    FlightBookingComponent,
    PassengerSearchComponent,
    DateComponent
  ],
  providers: [
    FlightService,
    FlightResolver,
    AuthGuard
  ],
  exports: [
    FlightSearchComponent,
    PassengerSearchComponent,
    //SharedModule,
    DateComponent
  ]
})
export class FlightBookingModule { }
