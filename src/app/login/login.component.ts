import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
// import { CoreModule } from '../core/core.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    // private authService: AuthService,
    private snackBar: MatSnackBar
  ) {

    this.loginForm = new FormGroup({});
    this.loginForm.addControl('username', new FormControl('', Validators.required));
    this.loginForm.addControl('password', new FormControl('', Validators.required));

  }

  ngOnInit() {

  }

  // login(form: any) {
  //   this.authService.login(form.username, form.password)
  //     .subscribe(result => {
  //       if (result === true) {
  //         this.router.navigate(['/']);
  //       } else {
  //         this.showLoginError();
  //       }
  //     }, this.showLoginError);
  // }

  showLoginError = (error?: HttpErrorResponse) => {
    this.snackBar.open('Error', '', { duration: 3000 });
  }

}

