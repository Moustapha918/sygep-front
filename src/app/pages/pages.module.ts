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

} from '@angular/material';
import { ChartsModule }                    from 'ng2-charts';
import { NgxChartsModule }                 from '@swimlane/ngx-charts';
import { CalendarModule }                  from 'angular-calendar';
import { AgmCoreModule }                   from '@agm/core';
import { AmChartsModule }                  from "@amcharts/amcharts3-angular";
import { PageDashboardComponent }          from './dashboards/dashboard-1/dashboard.component';
import { PageSignIn1Component }            from './extra-pages/sign-in-1/sign-in-1.component';
import {PageFilteringTableComponent} from "./tables/filtering-table/filtering-table.component";
import {AddClientComponent} from "./add-client/add-client.component";

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
    PageSignIn1Component,
    AddClientComponent

  ],
  exports: [
    PageDashboardComponent,
    PageSignIn1Component,
    AddClientComponent
  ],
  entryComponents: [

  ]
})
export class PagesModule {}
