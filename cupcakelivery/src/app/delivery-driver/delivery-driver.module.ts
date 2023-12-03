import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryDriverRoutingModule } from './delivery-driver-routing.module';

import { DeliveryDriverPage } from './delivery-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryDriverRoutingModule
  ],
  declarations: [DeliveryDriverPage]
})
export class DeliveryDriverPageModule {}
