import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from "./main/main.page";
import { ClientPage } from './client.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'client',
    component: ClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
