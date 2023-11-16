import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'client/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'client',
    redirectTo: 'client/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'client/:id',
    loadChildren: () => import('./client/client.module').then(m => m.ClientPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
