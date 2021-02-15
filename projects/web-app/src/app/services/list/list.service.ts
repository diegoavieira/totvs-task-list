import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/web-app/src/environments/environment';
import { Observable } from 'rxjs';
import { List } from './list';

@Injectable({ providedIn: 'root' })
export class ListService {
  listApi = `${environment.api}/lists`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<List[]> {
    return this.http.get<List[]>(this.listApi);
  }

  getById(id: number): Observable<List> {
    return this.http.get<List>(`${this.listApi}/${id}`);
  }

  save(list: List): Observable<List> {
    if (list.id) {
      return this.http.put<List>(`${this.listApi}/${list.id}`, JSON.stringify(list), this.httpOptions);
    }

    return this.http.post<List>(this.listApi, JSON.stringify(list), this.httpOptions);
  }

  delete(id: number): Observable<List> {
    return this.http.delete<List>(`${this.listApi}/${id}`);
  }
}
