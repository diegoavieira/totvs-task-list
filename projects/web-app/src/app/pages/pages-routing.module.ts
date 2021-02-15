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
    path: 'list/:listId/task/:taskId/form',
    loadChildren: () => import('./task-form/task-form.module').then((m) => m.TaskFormModule)
  },
  {
    path: 'list/form',
    loadChildren: () => import('./list-form/list-form.module').then((m) => m.ListFormModule)
  },
  {
    path: 'list/:listId/task/form',
    loadChildren: () => import('./task-form/task-form.module').then((m) => m.TaskFormModule)
  },
  {
    path: 'list/:listId/form',
    loadChildren: () => import('./list-form/list-form.module').then((m) => m.ListFormModule)
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
