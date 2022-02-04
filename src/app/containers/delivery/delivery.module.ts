import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailWidgetComponent } from 'src/app/components/detail-widget/detail-widget.component';
import { MapComponent } from 'src/app/components/map/map.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { DeliveryComponent } from './delivery.component';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DeliveryComponent,
    DetailWidgetComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    NgbDropdownModule,
    HttpClientModule
  ]
})
export class DeliveryModule { }
