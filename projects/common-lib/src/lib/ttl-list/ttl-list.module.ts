import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TtlListComponent } from './ttl-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TtlListComponent],
  imports: [CommonModule, RouterModule],
  exports: [TtlListComponent]
})
export class TtlListModule {}
