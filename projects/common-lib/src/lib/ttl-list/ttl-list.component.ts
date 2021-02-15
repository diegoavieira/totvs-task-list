import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ttl-list',
  templateUrl: './ttl-list.component.html',
  styleUrls: ['./ttl-list.component.scss']
})
export class TtlListComponent implements OnInit {
  @Input() items$: Observable<any>;
  @Input() isButton: boolean;
  @Input() noMessageResults: string;

  @Output() rowEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    if (!this.noMessageResults) {
      this.noMessageResults = 'Nenhum resultado encontrado';
    }
  }

  onRowClick(id: number): void {
    if (this.isButton) {
      this.rowEvent.emit(id);
    }
  }
}
