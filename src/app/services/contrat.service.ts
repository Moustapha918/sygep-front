import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Contrat} from "../pages/add-contrat/add-contrat.component";

@Injectable()
export class ContratService {

  constructor(private http : HttpClient) { }

  addContrat(contrat:Contrat) : Observable<any>{
    console.log(contrat);
    //let result = this.http.post( "contrats/add", contrat) ;
    return null;
  }

}
 