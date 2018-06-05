import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
    static readonly CURRENT_USER = 'currentUser';
    static readonly AUTH_URL = '/api/auth/login';

    public isServerReachable = true;

    private _token: string;

    get token(): string {
        return this._token;
    }

    constructor(private http: HttpClient) {
        const currentUser = JSON.parse(localStorage.getItem(AuthService.CURRENT_USER));
        this._token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        const credentials = { username: username, password: password };
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const options = { headers: headers };

        return this.http.post(AuthService.AUTH_URL, JSON.stringify(credentials), options)
            .map(response => {

                const token = response && response['token'];

                if (token) {
                    this._token = token;
                    localStorage.setItem(AuthService.CURRENT_USER, JSON.stringify({
                        username: username,
                        token: token
                    }));
                    return true;
                } else {
                    return false;
                }
        })
        .catch(error => {
            return Observable.throw(error);
        });
    }

    get isLoggedIn(): boolean {
        return (this._token != null) ? true : false;
    }

    logout(): void {
        this._token = null;
        localStorage.removeItem(AuthService.CURRENT_USER);
    }

}
