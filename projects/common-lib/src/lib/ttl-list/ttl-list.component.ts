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

  @Output() clickEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(id: number): void {
    if (this.isButton) {
      this.clickEvent.emit(id);
    }
  }
}
