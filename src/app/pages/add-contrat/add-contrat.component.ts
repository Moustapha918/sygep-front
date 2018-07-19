import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import {SharedService} from "../../layouts/shared-service";

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

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }
  ngOnInit() {
  }

  saveClick(){
    console.log("clicked");
  }

}
