import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import 'rxjs/add/operator/finally';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  //   styleUrls: ['./app.component.css']
})
export class NavbarComponent implements OnInit {
  num = 5;
  connection: string;

  constructor(private appSrv: AppService) {

  }

  ngOnInit() {
    this.appSrv.getConnectionNumber()
      .finally(() => {
        if (this.num === 666) {
          this.connection = 'Connected!';
        } else {
          this.connection = 'Not connected';
        }
      })
      .subscribe(res => {
        this.num = res;
      });
  }

}
