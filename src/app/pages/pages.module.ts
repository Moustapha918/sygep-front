import { NgModule }                        from '@angular/core';
import { CommonModule }                    from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NiComponentsModule }              from '../ni-components/ni-components.module';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { ChartsModule }                    from 'ng2-charts';
import { NgxChartsModule }                 from '@swimlane/ngx-charts';
import { CalendarModule }                  from 'angular-calendar';
import { AgmCoreModule }                   from '@agm/core';
import { AmChartsModule }                  from "@amcharts/amcharts3-angular";

import { PageDashboardComponent }          from './dashboards/dashboard-1/dashboard.component';
import { PageDashboard2Component }         from './dashboards/dashboard-2/dashboard-2.component';
import { PageDashboard3Component }         from './dashboards/dashboard-3/dashboard-3.component';
import { PageNiFilesComponent }            from './ni-components/file/file.component';
import { PageNiCardsComponent }            from './ni-components/card/card.component';
import { PageNiChatComponent }             from './ni-components/chat/chat.component';
import { PageNiAlertsComponent }           from './ni-components/alert/alert.component';
import { PageNiBadgesComponent }           from './ni-components/badge/badge.component';
import { PageNiBreadcrumbsComponent }      from './ni-components/breadcrumb/breadcrumb.component';
import { PageNiHTimelineComponent }        from './ni-components/h-timeline/h-timeline.component';

import { PageSignIn1Component }            from './extra-pages/sign-in-1/sign-in-1.component';
import { PageSignIn2Component }            from './extra-pages/sign-in-2/sign-in-2.component';
import { PageSignIn3Component }            from './extra-pages/sign-in-3/sign-in-3.component';
import { PageSignUp1Component }            from './extra-pages/sign-up-1/sign-up-1.component';
import { PageSignUp2Component }            from './extra-pages/sign-up-2/sign-up-2.component';
import { PageForgotComponent }             from './extra-pages/forgot/forgot.component';
import { PageConfirmComponent }            from './extra-pages/confirm/confirm.component';
import { Page404Component }                from './extra-pages/page-404/page-404.component';
import { Page500Component }                from './extra-pages/page-500/page-500.component';
import { PageNiButtonsComponent }          from './ni-components/buttons/buttons.component';
import {PageFilteringTableComponent} from "./tables/filtering-table/filtering-table.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NiComponentsModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ChartsModule,
    NgxChartsModule,
    CalendarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
    }),
    AmChartsModule
  ],
  declarations: [
    PageFilteringTableComponent,
    PageDashboardComponent,
    PageDashboard2Component,
    PageDashboard3Component,
    PageNiFilesComponent,
    PageNiCardsComponent,
    PageNiChatComponent,
    PageNiAlertsComponent,
    PageNiBadgesComponent,
    PageNiBreadcrumbsComponent,
    PageNiHTimelineComponent,
    PageSignIn1Component,
    PageSignIn2Component,
    PageSignIn3Component,
    PageSignUp1Component,
    PageSignUp2Component,
    PageForgotComponent,
    PageConfirmComponent,
    Page404Component,
    Page500Component,

    PageNiButtonsComponent
  ],
  exports: [
    PageDashboardComponent,
    PageDashboard2Component,
    PageDashboard3Component,
    PageNiFilesComponent,
    PageNiCardsComponent,
    PageNiChatComponent,
    PageNiAlertsComponent,
    PageNiBadgesComponent,
    PageNiBreadcrumbsComponent,
    PageNiHTimelineComponent,
    PageSignIn1Component,
    PageSignIn2Component,
    PageSignIn3Component,
    PageSignUp1Component,
    PageSignUp2Component,
    PageForgotComponent,
    PageConfirmComponent,
    Page404Component,
    Page500Component,
    PageNiButtonsComponent
  ],
  entryComponents: [

  ]
})
export class PagesModule {}
