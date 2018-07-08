import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { DefaultLayoutComponent }       from './layouts/default/default.component';
import { ExtraLayoutComponent }         from './layouts/extra/extra.component';

import { PageDashboardComponent }       from './pages/dashboards/dashboard-1/dashboard.component';

import { PageSignIn1Component }         from './pages/extra-pages/sign-in-1/sign-in-1.component';
import { PageSignIn2Component }         from './pages/extra-pages/sign-in-2/sign-in-2.component';
import { PageSignIn3Component }         from './pages/extra-pages/sign-in-3/sign-in-3.component';
import { PageSignUp1Component }         from './pages/extra-pages/sign-up-1/sign-up-1.component';
import { PageSignUp2Component }         from './pages/extra-pages/sign-up-2/sign-up-2.component';
import { PageForgotComponent }          from './pages/extra-pages/forgot/forgot.component';
import { PageConfirmComponent }         from './pages/extra-pages/confirm/confirm.component';
import { Page404Component }             from './pages/extra-pages/page-404/page-404.component';
import { Page500Component }             from './pages/extra-pages/page-500/page-500.component';
import { PageFilteringTableComponent }  from './pages/tables/filtering-table/filtering-table.component';

const defaultRoutes: Routes = [
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'sign-in', component: PageSignIn2Component },
  { path: 'sign-up', component: PageSignUp2Component },
  { path: 'filtering-table', component: PageFilteringTableComponent },
];

const extraRoutes: Routes = [
  { path: 'sign-in', component: PageSignIn1Component },
  { path: 'sign-in-social', component: PageSignIn3Component },
  { path: 'sign-up', component: PageSignUp1Component },
  { path: 'forgot', component: PageForgotComponent },
  { path: 'confirm', component: PageConfirmComponent },
  { path: 'page-404', component: Page404Component },
  { path: 'page-500', component: Page500Component },
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
