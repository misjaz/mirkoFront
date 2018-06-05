import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- NgModel lives here
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransResolver } from './core/services/trans-resolver.service';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartsModule } from 'ng2-charts';

import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentStepsModule } from '@covalent/core/steps';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import {
  CovalentLayoutModule, CovalentDataTableModule, CovalentLoadingModule, CovalentPagingModule, TdLoadingService
} from '@covalent/core';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import {
  MatInputModule, MatSnackBarModule, MatSelectModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatTooltipModule,
  MatCheckboxModule
} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
// import { AuthService } from './core/services/auth.service';
// import { TokenInterceptor } from './core/interceptors/token.interceptor';
// import { AuthGuard } from './core/guards/auth.guard';?
// import { AccountService } from './core/services/account.service';
// import { CoreModule } from './core/core.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    NavbarComponent,
    UserComponent
  ],
  imports: [
    CovalentLayoutModule,
    CovalentDataTableModule,
    CovalentLoadingModule,
    CovalentPagingModule,
    // TdLoadingService,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    FlexLayoutModule,
    TranslateModule,
    // LoginModule,
    // CoreModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    AppService,
    // AuthGuard,
    HeroService,
    // TransResolver,
    // TranslateService
    // AuthService,
    // AccountService,
    // {
    // provide: HTTP_INTERCEPTORS,
    // useClass: TokenInterceptor,
    // multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
