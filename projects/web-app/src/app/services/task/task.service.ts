import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/web-app/src/environments/environment';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({ providedIn: 'root' })
export class TaskService {
  taskApi = `${environment.api}/tasks`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskApi);
  }

  getByListId(listId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.taskApi}?listId=${listId}`);
  }

  getById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.taskApi}/${id}`);
  }

  save(task: Task): Observable<Task> {
    if (task.id) {
      return this.http.put<Task>(`${this.taskApi}/${task.id}`, JSON.stringify(task), this.httpOptions);
    }

    return this.http.post<Task>(this.taskApi, JSON.stringify(task), this.httpOptions);
  }

  delete(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.taskApi}/${id}`);
  }
}
