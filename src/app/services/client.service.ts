import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Client} from "../pages/tables/filtering-table/filtering-table.component";

@Injectable()
export class ClientService {
  constructor(private http : HttpClient) {

  }

  addUser() : Observable<any>{
    const credentials = {username: "deyd", password: "deyd", email : "kabermoustapha@gmail.com"};
    let result = this.http.post( "users/add", credentials) ;
    return result;
  }

  getClients() : Observable<Client[]>{
  return this.http.get<Client[]>( "client/all" );
  }
}
