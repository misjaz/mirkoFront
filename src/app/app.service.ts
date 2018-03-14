import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

  private static readonly URL = '/api/v1/shipwrecks';

  constructor(private http: HttpClient) { }

  getBrvString(): Observable<number> {
    return this.http.get<number>(AppService.URL);
  }

  private createHeaders(): HttpHeaders {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return headers;
  }

}
