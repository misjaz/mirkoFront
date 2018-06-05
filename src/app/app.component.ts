import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { User } from './user/user.model';
// import { CoreModule } from './core/core.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  num = 5;
  name: string;

  constructor(
  ) {

  }

  ngOnInit() {

  }


}
