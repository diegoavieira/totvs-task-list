import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TtlToolbarComponent } from './ttl-toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TtlToolbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [TtlToolbarComponent]
})
export class TtlToolbarModule {}
