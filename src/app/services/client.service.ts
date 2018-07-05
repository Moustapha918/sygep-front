import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UserData} from "../pages/tables/filtering-table/filtering-table.component";
import {environment} from "../../environments/environment";

@Injectable()
export class ClientService {

  constructor(private http : HttpClient) {

  }

  addUser() : Observable<any>{
    const credentials = {username: "deyd", password: "deyd", email : "kabermoustapha@gmail.com"};
    let result = this.http.post( "users/add", credentials) ;
    return result;
  }

  getClientq(): Observable<UserData> {
    const clientsList = [];
    let d1 = {Id: '1',name :'Ahmed', }
    return Observable.of(null);
  }


}
