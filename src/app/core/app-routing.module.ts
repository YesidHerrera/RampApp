import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from '../modules/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () => import('../modules/dashboard/dashboard.module').then(m => DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
