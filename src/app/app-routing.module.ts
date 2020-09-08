import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './layout/master/master.component';
import { PublicComponent } from './layout/public/public.component';


const routes: Routes = [

  // {
  //   path: '',
  //   component: PublicComponent,
  //   loadChildren: () => import('./components/public/_module').then((m) => m.PublicModule),
  // },
  {
    path: '',
    component: MasterComponent,
    loadChildren: () =>
      import('./components/dashboard/_module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'dashboard',
    component: MasterComponent,
    loadChildren: () =>
      import('./components/dashboard/_module').then(
        (m) => m.DashboardModule
      ),
  },
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
