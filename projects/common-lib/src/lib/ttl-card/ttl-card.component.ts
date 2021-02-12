import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ttl-card',
  templateUrl: './ttl-card.component.html',
  styleUrls: ['./ttl-card.component.scss']
})
export class TtlCardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() actionLabel: string;
  @Input() route: string;

  constructor() {}

  ngOnInit(): void {}
}
