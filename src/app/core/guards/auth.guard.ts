import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { AccountService } from '../services/account.service';
import { IAccount } from '../models/account';

@Injectable()
export class AuthGuard implements CanActivate {

  static readonly LOGIN_ROUTE = 'login';
  static readonly ACCESS_DENIED_ROUTE = 'access-denied';
  static readonly DATA_AUTH = 'authorities'; // e.g. data: { auth: ['ROLE_USER', 'ROLE_ADMIN'] }

  constructor(
    private router: Router,
    private authService: AuthService,
    private accountService: AccountService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    const routeAuthorities = route.data[AuthGuard.DATA_AUTH];
    if (!routeAuthorities || routeAuthorities.length === 0) {
      console.warn(`AuthGuard will allow access to "${route.url}" unconditionally. No authority specified.`);
      return Observable.of(true);
    } else {
      if (!this.authService.isLoggedIn) {
        console.warn(`AuthGuard will deny access to "${route.url}". User is not logged in.`);
        this.router.navigate([AuthGuard.LOGIN_ROUTE]);
        return Observable.of(false);
      } else {
        return this.accountService.getAccount().map((account: IAccount) => {
          for (const ra of routeAuthorities) {
            for (const aa of account.authorities) {
              if (aa.authority === ra) {
                return true;
              }
            }
          }
          console.warn(`AuthGuard will deny access to "${route.url}". User has insufficient authority.`);
          this.router.navigate([AuthGuard.ACCESS_DENIED_ROUTE]);
          return false;
        });
      }
    }
  }
}
