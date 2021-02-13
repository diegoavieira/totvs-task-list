import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { TtlListModule } from '@totvs-task-list/common';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule, TtlListModule]
})
export class ListModule {}
