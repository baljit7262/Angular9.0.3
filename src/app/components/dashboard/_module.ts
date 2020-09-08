import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DashboardComponent,
  ],

  imports: [
    CommonModule,
    ChartsModule,
    MatTabsModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class DashboardModule {

}