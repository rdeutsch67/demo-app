import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let isProtected = route.data['protected'];

    if (this.authService.isLoggedIn || !isProtected) {
      return true;
    }
    else {
      this.router.navigate(['/home', {needLogin: true}]);
      return false;
    }
  }
}
