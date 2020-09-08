import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { SidebarComponent } from './sidebar.component';


@NgModule({
  declarations: [
    SidebarComponent,
  ],

  imports: [
    CommonModule,
    MatTabsModule,
  ],
  exports: [
    SidebarComponent
  ],
  providers: [],
  entryComponents: [],

})
export class SidebarModule {

}