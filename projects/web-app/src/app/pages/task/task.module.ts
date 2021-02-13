import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TtlListModule } from '@totvs-task-list/common';

@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule, TaskRoutingModule, TtlListModule]
})
export class TaskModule {}
