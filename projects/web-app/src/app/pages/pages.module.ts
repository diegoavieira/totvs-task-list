import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { TtlToolbarModule } from '@totvs-task-list/common';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule, TtlToolbarModule]
})
export class PagesModule {}
