import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { List } from '../../services/list/list';
import { ListService } from '../../services/list/list.service';
import { Task } from '../../services/task/task';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'web-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks$: Observable<Task[]>;
  list$: Observable<List>;
  listId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private listService: ListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listId = this.activatedRoute.snapshot.params.listId;
    this.tasks$ = this.taskService.getByListId(this.listId);
    this.list$ = this.listService.getById(this.listId);
  }

  goTo(id: number): void {
    this.router.navigateByUrl(`/list/${this.listId}/task/${id}/form`);
  }
}
