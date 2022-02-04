import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {    path: 'entregas',  loadChildren: () => import('./containers/delivery/delivery.module').then(m => m.DeliveryModule)},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
