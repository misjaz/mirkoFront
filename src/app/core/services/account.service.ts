import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Roles } from '../models/roles';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { IAccount } from '../models/account';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AccountService {
  static readonly URL = '/api/account';
  static readonly ACCOUNT = 'account';

  private accountState = new Subject<IAccount>();

  constructor(private http: HttpClient) { }

  /**
   * Get current (i.e. logged in) user account info.
   * @param forceRefresh Reload account from server (i.e. discard cached result).
   */
  getAccount(forceRefresh = false): Observable<IAccount> {
    if (forceRefresh) {
      return this.reloadAccount();
    } else {
      const account = JSON.parse(localStorage.getItem(AccountService.ACCOUNT)) as IAccount;
      if (account) {
        return Observable.of(account);
      } else {
        return this.reloadAccount();
      }
    }
  }

  getAccountFromLocalStorage(): IAccount {
    return JSON.parse(localStorage.getItem(AccountService.ACCOUNT)) as IAccount;
  }

  private reloadAccount(): Observable<IAccount> {
    return this.http.get(AccountService.URL).map(res => {
      localStorage.setItem(AccountService.ACCOUNT, JSON.stringify(res));
      this.accountState.next(res as IAccount);
      return res;
    }).catch(error => Observable.throw(error));
  }

  getAccountState(): Observable<IAccount> {
    return this.accountState.asObservable();
  }

  isAdmin(): Observable<boolean> {
    // Get most recent infromation about account
    return this.getAccount(true).map(account => {
      if (account.authorities.filter(authority => authority.authority === Roles.ROLE_ADMIN).length > 0) {
        return true;
      }
      return false;
    });
  }

  hasAuthority(authority: string): Observable<boolean> {
    return this.getAccount().map(account => {
      if (account.authorities.filter(auth => auth.authority === authority).length > 0) {
        return true;
      }
      return false;
    });
  }

  getRoles(): Observable<IRoles> {
    return this.getAccount().map(account => {
      const authorities = account.authorities.map(authority => authority.authority);
      return {
        wu: authorities.indexOf(Roles.ROLE_WU) !== -1,
        xa: authorities.indexOf(Roles.ROLE_XA) !== -1,
        dr: authorities.indexOf(Roles.ROLE_DR) !== -1
      };
    });
  }

}

export interface IRoles {
  wu: boolean;
  xa: boolean;
  dr: boolean;
}
