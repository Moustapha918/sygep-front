import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { SharedService } from '../../../layouts/shared-service';
import {ClientService} from "../../../services/client.service";
import { Router } from "@angular/router";

const BREADCRUMBS: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Tables',
    link: '#'
  },
  {
    title: 'Nos clients',
    link: ''
  }
];

export interface Client {
  id: string;
  nom: string;
  prenom: string;
  telephone: string;
}

@Component({
  selector: 'page-filtering-table',
  templateUrl: './filtering-table.component.html',
  styleUrls: ['./filtering-table.component.scss']
})
export class PageFilteringTableComponent implements OnInit {
  pageTitle: string = 'Nos clients';
  breadcrumb: any[] = BREADCRUMBS;
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  //exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;
  dataChange: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>([]);

  @ViewChild('filter') filter: ElementRef;

  constructor( private _sharedService: SharedService,private clientService: ClientService,private  router : Router ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.clientService.getClients().subscribe((data) => {
      console.log(data)
      this.dataChange.next(data);

    });

    this.dataSource = new ExampleDataSource(this.dataChange);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }


  newClient(){
    this.router.navigateByUrl("/default-layout/add-client");
  }

}

export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private dataChange: BehaviorSubject<Client[]>) {
    super();
  }

  connect(): Observable<Client[]> {
    const displayDataChanges = [
      this.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.dataChange.value.slice().filter((item: Client) => {
        let searchStr = (item.nom + item.prenom).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
    });
  }

  disconnect() {}
}
