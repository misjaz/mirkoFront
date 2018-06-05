import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpSentEvent } from '@angular/common/http';
import { HttpProgressEvent } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { HttpUserEvent } from '@angular/common/http';
import { HttpHeaderResponse } from '@angular/common/http';
import { Status } from '../../shared/status.enum';
import 'rxjs/add/operator/do';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    private readonly API = '/api/';
    private readonly LOGIN = '/login';

    constructor(private inj: Injector, private router: Router) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

        const auth: AuthService = this.inj.get(AuthService);

        if (request.url.startsWith(this.API) && auth.isLoggedIn) {

            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
        }

        return next.handle(request).do(null, (error: HttpErrorResponse) => {
            if (error.status === Status.UNAUTHORIZED) {
                auth.logout();
                this.navigateToLoginPage();
            }

            if (error.status === Status.TIMEOUT) {
                auth.isServerReachable = false;
            }
        });
    }

    private navigateToLoginPage() {
        this.router.navigate([this.LOGIN]);
    }
}
