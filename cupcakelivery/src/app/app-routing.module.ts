import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {InProgressPage} from "./in-progress/in-progress.page";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainPageModule)
      },
    ]
  },
  {
    path: 'register',
    children: [
      {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
      },
    ]
  },
  {
    path: 'in-progress',
    children: [
      {
        path: '',
        redirectTo: 'in-progress',
        pathMatch: 'full'
      },
      {
        path: 'in-progress',
        loadChildren: () => import('./in-progress/in-progress.module').then(m => m.InProgressPageModule)
      }
    ]
  },
  {
    path: 'client',
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: ':id',
        loadChildren: () => import('./client/client.module').then(m => m.ClientPageModule)
      }
    ]
  },
  {
    path: 'delivery-driver',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./delivery-driver/delivery-driver.module').then(m => m.DeliveryDriverPageModule)
      },
    ]
  },
  // Criar parte do vendedor
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
