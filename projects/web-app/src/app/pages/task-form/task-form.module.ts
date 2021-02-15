import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormRoutingModule } from './task-form-routing.module';
import { TaskFormComponent } from './task-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskFormComponent],
  imports: [CommonModule, TaskFormRoutingModule, ReactiveFormsModule]
})
export class TaskFormModule {}
