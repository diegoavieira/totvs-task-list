import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task } from '../../services/task/task';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'web-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;
  isEdit: boolean;
  showAlert: boolean;
  taskId: number;
  listId: number;
  task$: Observable<Task>;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskId = this.activatedRoute.snapshot.params.taskId;
    this.listId = this.activatedRoute.snapshot.params.listId;

    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      status: [false]
    });

    if (this.taskId) {
      this.setFormValues();
      this.isEdit = true;
    } else {
      this.task$ = of({ title: '', status: false, listId: this.listId });
      this.isEdit = false;
    }
  }

  setFormValues(): void {
    this.task$ = this.taskService.getById(this.taskId).pipe(
      tap((task) => {
        if (task) {
          this.formGroup.setValue({ title: task.title, status: task.status });
        }
      })
    );
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    const newTask: Task = {
      id: this.taskId,
      title: this.formGroup.value.title,
      status: this.formGroup.value.status,
      listId: this.listId
    };

    this.taskService.save(newTask).subscribe(() => {
      if (this.isEdit) {
        this.submitted = false;
        this.showAlert = true;
        setTimeout(() => (this.showAlert = false), 3000);
      } else {
        this.router.navigate(['/list/' + this.listId + '/task']);
      }
    });
  }

  onDelete(id: number): void {
    this.submitted = true;

    this.taskService.delete(id).subscribe(() => {
      this.submitted = false;
      this.router.navigate(['/list/' + this.listId + '/task']);
    });
  }
}
