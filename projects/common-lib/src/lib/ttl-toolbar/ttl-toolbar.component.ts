import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ttl-toolbar',
  templateUrl: './ttl-toolbar.component.html',
  styleUrls: ['./ttl-toolbar.component.scss']
})
export class TtlToolbarComponent implements OnInit {
  @Input() title: string;
  @Input() background: 'primary' | 'secondary';
  @Input() color: 'light' | 'dark';
  @Input() route: string;

  constructor() {}

  ngOnInit(): void {
    if (!this.background) {
      this.background = 'primary';
    }

    if (!this.color) {
      this.color = 'dark';
    }

    if (!this.route) {
      this.route = '/';
    }
  }
}
