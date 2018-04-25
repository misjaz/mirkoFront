import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { User } from './user/user.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  num = 5;
  users: User[];
  name: string;

  constructor(private appSrv: AppService) {

  }

  ngOnInit() {
    this.getUsers();
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

  addUser(name: string, email: string) {
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
