import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ttl-footer',
  templateUrl: './ttl-footer.component.html',
  styleUrls: ['./ttl-footer.component.scss']
})
export class TtlFooterComponent implements OnInit {
  @Input() name: string;
  currentYear: number;

  constructor() {}

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
