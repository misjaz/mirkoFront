import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- NgModel lives here
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule
  ],
  schemas: [NO_ERRORS_SCHEMA ],
  providers: [
    AppService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
