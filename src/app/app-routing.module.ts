import { AddContratComponent } from './pages/add-contrat/add-contrat.component';
import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { DefaultLayoutComponent }       from './layouts/default/default.component';
import { ExtraLayoutComponent }         from './layouts/extra/extra.component';

import { PageDashboardComponent }       from './pages/dashboards/dashboard-1/dashboard.component';

import { PageSignIn1Component }         from './pages/extra-pages/sign-in-1/sign-in-1.component';
import { PageFilteringTableComponent }  from './pages/tables/filtering-table/filtering-table.component';
import {AddClientComponent} from "./pages/add-client/add-client.component";

const defaultRoutes: Routes = [
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'filtering-table', component: PageFilteringTableComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'add-contrat', component: AddContratComponent}
];

const extraRoutes: Routes = [
  { path: 'sign-in', component: PageSignIn1Component },
];

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/extra-layout/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'default-layout',
    component: DefaultLayoutComponent,
    children: defaultRoutes
  },
  {
    path: 'extra-layout',
    component: ExtraLayoutComponent,
    children: extraRoutes
  },
  {
    path: '**',
    component: DefaultLayoutComponent,
    children: defaultRoutes
  }
];

@NgModule({
  imports: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
