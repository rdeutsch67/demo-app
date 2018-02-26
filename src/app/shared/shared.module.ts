import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'
import {CityPipe} from './pipes/city.pipe';
import {FlightBookingComponent} from '../flight-booking/flight-booking.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth/auth.service';
import {SimpleAuthService} from './auth/simple-auth.service';
/*import { FormsModule } from '@angular/forms';*/

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    CityPipe
  ],
  providers: [
    //{provide: AuthService, useClass: SimpleAuthService}
  ],
  exports: [
    CityPipe
  ]/*,
  entryComponents: [
    FlightBookingComponent]*/

})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      providers: [
        {provide: AuthService, useClass: SimpleAuthService}
      ],
      ngModule: SharedModule
    }
  }
}
