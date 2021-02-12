import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../services/task/task';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'web-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasksPending$: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasksPending$ = this.taskService.getByStatus(false);
  }
}
