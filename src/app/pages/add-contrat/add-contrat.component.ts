import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import {SharedService} from "../../layouts/shared-service";
import { ContratService } from '../../services/contrat.service';

const BREADCRUMBS: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Forms',
    link: '#'
  },
  {
    title: 'Form elements',
    link: ''
  }
];

export interface Contrat{
  client?:{
    clientId?: number;
  };
  bienImmobilier?:{
    id?: number;
  };
  etat?: string;
  numContrat?: number;
  duree?: number;
  type?: string;
}

const contrats = [
  {value: 'ls', viewValue: 'Location Simple'},
  {value: 'lv', viewValue: 'Location Vente'},
  {value: 'v', viewValue: 'Vente'},
];

const bienImmobiliers = [
  {value: 20, viewValue: '20 rue 45 Leksar'},
  {value: 25, viewValue: '25 rue 555 TVZ'},
];

const clients = [
  {value: 1, viewValue: 'Brahim Bahaida'},
  {value: 2, viewValue: 'Moustapha Kaber'},
];

const etats = [
  {value: 0, viewValue: 'Active'},
  {value: 1, viewValue: 'Inactive'},
];


@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.scss']
})
export class AddContratComponent implements OnInit {
  contrats = contrats;
  bienImmobiliers = bienImmobiliers;
  clients = clients;
  etats = etats;
  pageTitle: string = 'Add contrat';
  breadcrumb: any[] = BREADCRUMBS;
  contrat:Contrat={
    client:{
      clientId: 0,
    },
    bienImmobilier:{
      id: 0,
    },
    etat: '',
    numContrat: 0,
    duree: 0,
    type: '',
  }

  constructor( private _sharedService: SharedService, private contratService: ContratService ) {
    this._sharedService.emitChange(this.pageTitle);
    
  }
  ngOnInit() {
  }


  onSubmit({form}){
    this.contrat.type = form.value.contrat;
    this.contrat.client.clientId = form.value.client;
    this.contrat.bienImmobilier.id = form.value.bien;
    this.contrat.etat = form.value.etat;
    this.contrat.numContrat = parseInt(form.value.numContrat);
    this.contrat.duree = parseInt(form.value.duree);

    console.log(this.contrat);
    this.contratService.addContrat(this.contrat).subscribe((data) => {
      console.log(data);
    });

  }

}
