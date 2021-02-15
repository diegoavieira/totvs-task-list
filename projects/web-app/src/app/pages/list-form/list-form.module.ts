import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFormRoutingModule } from './list-form-routing.module';
import { ListFormComponent } from './list-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListFormComponent],
  imports: [CommonModule, ListFormRoutingModule, ReactiveFormsModule]
})
export class ListFormModule {}
