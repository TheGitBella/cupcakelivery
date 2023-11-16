import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'client',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./client/client.module').then(m => m.ClientPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./client/client.module').then(m => m.ClientPageModule)
      }
    ]
  },
  // Criar parte do vendedor
/*  {
    path: 'seller',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./seller/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      // Add more seller-specific routes as needed
    ]
  },*/
  // Criar parte do entregador
/*  {
    path: 'driver',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./driver/dashboard/dashboard.module').then(m => m.DriverDashboardPageModule)
      },
    ]
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
