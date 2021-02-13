import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { List } from '../../services/list/list';
import { ListService } from '../../services/list/list.service';

@Component({
  selector: 'web-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  lists$: Observable<List[]>;

  constructor(private listService: ListService, private router: Router) {}

  ngOnInit(): void {
    this.lists$ = this.listService.getAll();
  }

  goTo(id: number): void {
    this.router.navigateByUrl(`/list/${id}/task`);
  }
}
