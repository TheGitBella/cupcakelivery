import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientPageRoutingModule } from './client-routing.module';

import { ClientPage } from './client.page';
import { ProfilePage } from "./profile/profile.page";
import { ShoppingPage } from "./shopping/shopping.page";
import { CatalogPage } from "./catalog/catalog.page";
import { InProgressPage } from "./in-progress/in-progress.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ClientPage,
    ProfilePage,
    ShoppingPage,
    CatalogPage,
    InProgressPage
  ]
})
export class ClientPageModule {}
