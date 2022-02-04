import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from './delivery.component';


const routes: Routes = [
  { path: '', component: DeliveryComponent},
  // entregas/detalle/123/origen
  // entregas/detalle/123/destino
  { path: ':section', component: DeliveryComponent},
  { path: 'detalle/:id/:section', component: DeliveryComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
