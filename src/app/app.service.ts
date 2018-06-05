import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user/user.model';
// import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

  private static readonly URL = '/api/';

  constructor(private http: HttpClient) { }

  getConnectionNumber(): Observable<number> {
    return this.http.get<number>(AppService.URL + 'connection');
  }

  getUsersFromDB(): Observable<User[]> {
    return this.http.get<User[]>(AppService.URL + 'user/all');
  }

  addUserInDB(user: User): Observable<any> {
    return this.http.post<User>(AppService.URL + 'user/add', user);
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete<any>(AppService.URL + 'user/delete/all');
  }

  private createHeaders(): HttpHeaders {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return headers;
  }

}
