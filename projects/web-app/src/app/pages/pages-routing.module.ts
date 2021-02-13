import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
