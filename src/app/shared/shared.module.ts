import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTab, MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { SidebarModule } from './sidebar/sidebar.module';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, SidebarModule],
  exports: [
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatTabsModule,
    MatSidenavModule,
  ],
 
})
export class SharedModule {}
