import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class AuthService {


  constructor(private http: HttpClient) {
  }

  login(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    return this.http.post(environment.backendUrl + "Users/signin", credentials) ;
  }

}
