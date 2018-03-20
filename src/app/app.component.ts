import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  num = 5;

  constructor(private appSrv: AppService) {

  }

  ngOnInit() {
    this.appSrv.getBrvString()
      .subscribe(res => {
        this.num = res;
      });
  }

}
