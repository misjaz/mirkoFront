import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
// import { AuthService } from '../core/services/auth.service';
import { User } from './user.model';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import {
   TdDataTableSortingOrder, IPageChangeEvent,
  ITdDataTableSortChangeEvent, TdLoadingService, TdDataTableComponent
} from '@covalent/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Page } from '../shared/page.model';
import { Sort } from '../shared/sort.model';
import { PageFactory } from '../shared/page.factory';
import { SortFactory } from '../shared/sort.factory';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @ViewChild('dataTable') dataTable: TdDataTableComponent;
  users: User[];
  page: Page;
  sort: Sort;
  totalCount = 0;

  temp: any;

  private sortOrder: ITdDataTableSortChangeEvent;


  configWidthColumns: ITdDataTableColumn[] = [
    { name: 'name',  label: 'First name', width: 150 },
    { name: 'company', label: 'Last name', width: { min: 150, max: 250 }},
    { name: 'gender', label: 'Gender'},
    { name: 'email', label: 'Email', width: 250}
  ];
  basicData = [{}];
  form: FormGroup;

  constructor(
    private appSrv: AppService,
    // private trans: TranslateService,
    // public authService: AuthService,
  ) {

  }

  ngOnInit() {
    this.addFormControls();
    this.page = PageFactory.createDefault();
    this.sortOrder = { name: 'id', order: TdDataTableSortingOrder.Descending };
    this.sort = SortFactory.createSortFromEvent(this.sortOrder);
    this.getUsers();
  }

  private addFormControls() {
    this.form = new FormGroup({});
    this.form.addControl('name', new FormControl('', null));
    this.form.addControl('email', new FormControl('', null));
    this.form.addControl('company', new FormControl('', null));
  }

  addUser() {
    const user = new User();
    user.name = this.form.controls['name'].value;
    user.email = this.form.controls['email'].value;
    this.storeUser(user.name, user.email);
    this.dataTable.refresh();
    this.form.controls['name'].reset();
    this.form.controls['email'].reset();
  }

  getUsers() {
    this.appSrv.getUsersFromDB()
      .subscribe(res => {
        this.users = res;
      });
  }

  deleteAllUsers() {
    this.appSrv.deleteAllUsers()
      .finally(() => {
        this.getUsers();
      })
      .subscribe(res => {
        console.log(res);
      });
  }

  storeUser(name: string, email: string) {
    const user = new User();
    user.email = 'p@p.com';
    user.name = 'Misja';
    this.appSrv.addUserInDB(user)
      .finally(() => {
        this.getUsers();
      })
      .subscribe(() => {
        console.log('');
      });
  }

}
