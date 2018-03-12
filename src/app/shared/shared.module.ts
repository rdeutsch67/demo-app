import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'
import {CityPipe} from './pipes/city.pipe';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth/auth.service';
import {SimpleAuthService} from './auth/simple-auth.service';
import {AuthChildGuard} from './auth/auth.child.guard';
import {AuthLoadGuard} from './auth/auth.load.guard';
import {LeaveComponentGuard} from './deactivation/leave-component-guard';
import {CityValidatorDirective} from './validation/city.validator';
import {AsyncCityValidatorDirective} from './validation/city.async.validator';
import {ValidationErrorsComponent} from './validation/validation-errors.component';
import {RoundTripDirective} from './validation/roundtrip.validator';
import {CityReactiveValidatorDirective} from './validation/city-reactive.validator';
/*import { FormsModule } from '@angular/forms';*/

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    CityPipe,
    CityValidatorDirective,
    //AsyncCityValidatorDirective,
    ValidationErrorsComponent,
    RoundTripDirective,
    CityReactiveValidatorDirective
  ],
  providers: [
    //{provide: AuthService, useClass: SimpleAuthService}
  ],
  exports: [
    CityPipe,
    CityValidatorDirective,
    //AsyncCityValidatorDirective,
    ValidationErrorsComponent,
    RoundTripDirective,
    CityReactiveValidatorDirective
  ]/*,
  entryComponents: [
    FlightBookingComponent]*/

})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      providers: [
        {provide: AuthService, useClass: SimpleAuthService},
        AuthChildGuard,
        AuthLoadGuard,
        LeaveComponentGuard
      ],
      ngModule: SharedModule
    }
  }
}
