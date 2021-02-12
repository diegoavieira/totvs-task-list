import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TtlCardComponent } from './ttl-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TtlCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [TtlCardComponent]
})
export class TtlCardModule {}
