import { ClientService } from './../../services/client.service';
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

export interface Client{
  id?:number,
  nom?:string,
  prenom?:string,
  tel?:string,
  email?:string,
  adresse?:string,
}

@Component({
  selector: 'app-form-elements',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  pageTitle: string = 'Form elements';
  breadcrumb: any[] = BREADCRUMBS;
  stateCtrl: FormControl;
  filteredStates: any;
  client:Client={};

  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  favoriteSeason: string = 'Winter';

  seasons: string[] = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn'
  ];

  color: string;

  availableColors = [
    { name: 'Default', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warning', color: 'warn' }
  ];

  constructor( private _sharedService: SharedService, private _clientService: ClientService ) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));

    this._sharedService.emitChange(this.pageTitle);
  }

  filterStates(val: string) {
    return val ? this.states.filter((s) => new RegExp(val, 'gi').test(s)) : this.states;
  }
  onSubmit(form){
    this._clientService.addClient(this.client).subscribe(x=>{
      console.log(x);
    });
  }

  ngOnInit() {}
}
