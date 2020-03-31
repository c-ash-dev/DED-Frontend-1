import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

     constructor(
          private authService: AuthenticationService, 
          private router: Router) { }

     canActivate() {
          if(!this.authService.isLoggedIn()) {
               this.router.navigate(['/']);
               return false;
          }

          return true;
     }
}