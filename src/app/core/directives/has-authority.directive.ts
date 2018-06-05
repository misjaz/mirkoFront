import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AccountService } from '../services/account.service';
import { IAccount } from '../models/account';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[wizaHasAuthority]'
})
export class HasAuthorityDirective {

  private authorities: string[];

  constructor(
    private accountSrv: AccountService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input()
  set wizaHasAuthority(value: string | string[]) {
    this.authorities = typeof value === 'string' ? [value as string] : value as string[];
    this.updateView();
    this.accountSrv.getAccountState().subscribe(account => this.updateView());
  }

  private updateView() {
    this.accountSrv.getAccount().subscribe(account => {
      const b = this.hasAuth(account);
      this.viewContainerRef.clear();
      if (b) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    });
  }

  private hasAuth(account: IAccount): boolean {
    if (this.authorities.length < 1) {
      return true;
    }
    for (const auth of this.authorities) {
      for (const aa of account.authorities) {
        if (auth === aa.authority) {
          return true;
        }
      }
    }
    return false;
  }

}
