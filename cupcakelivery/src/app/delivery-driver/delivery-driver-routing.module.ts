import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryDriverPage } from './delivery-driver.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryDriverRoutingModule {}
