import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Update } from '@ngrx/entity';
import { map, Observable, tap } from 'rxjs';
import { Todo } from 'src/app/core/models/todo';

@Injectable()
export class TodoDataService extends DefaultDataService<Todo> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Todo', http, httpUrlGenerator);
  }

  override getAll(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>('http://localhost:9000/api/todos')
      .pipe(map((todos) => todos['todos']));
  }

  override update(update: Update<Todo>): Observable<Todo> {
    return this.http.patch<Todo>(
      `http://localhost:9000/api/todos/${update.id}`,
      {
        ...update.changes,
      }
    );
  }

  override add(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>('http://localhost:9000/api/todos', todo)
      .pipe(map((todo) => todo['todo']));
  }

  override delete(key: number): Observable<number> {
    return this.http.delete<number>(`http://localhost:9000/api/todos/${key}`);
  }
}
