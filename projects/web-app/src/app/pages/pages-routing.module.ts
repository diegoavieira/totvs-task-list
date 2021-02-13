import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule)
  },
  {
    path: 'list/:listId/task',
    loadChildren: () => import('./task/task.module').then((m) => m.TaskModule)
  },
  {
    path: 'list/form',
    loadChildren: () => import('./form/form.module').then((m) => m.FormModule)
  },
  {
    path: 'list/:listId/form',
    loadChildren: () => import('./form/form.module').then((m) => m.FormModule)
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
