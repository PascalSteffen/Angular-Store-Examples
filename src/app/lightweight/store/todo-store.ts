import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  tap,
  throwError,
} from 'rxjs';
import { Todo } from 'src/app/core/models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
  private subject = new BehaviorSubject<Todo[]>([]);
  todo$: Observable<Todo[]> = this.subject.asObservable();

  constructor(private http: HttpClient) {
    this.loadAllTodos();
  }

  /* Test Function */
  loadAllTodosTest(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/api/todos');
  }

  private loadAllTodos() {
    this.http
      .get<Todo[]>('/api/todos')
      .pipe(
        map((todos) => todos['todos']),
        catchError((err) => {
          console.log('Fetch failed...');
          return throwError(() => err);
        }),
        tap((todos) => {
          this.subject.next(todos);
        })
      )
      .subscribe();
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>('/api/todos', todo)
      .pipe(tap(() => this.loadAllTodos()));
  }

  updateTodo(changes: Partial<Todo>, id: number): Observable<Todo> {
    const todos = this.subject.getValue();

    const index = todos.findIndex((todo) => todo.id == id);

    const newTodo: Todo = {
      ...todos[index],
      ...changes,
    };

    const newTodos: Todo[] = todos.slice(0);

    newTodos[index] = newTodo;

    this.subject.next(newTodos);

    return this.http.patch<Todo>(`/api/todos/${id}`, {
      ...changes,
    });
  }

  deleteTodo(id: number): Observable<Todo> {
    const todos = this.subject.getValue();

    const index = todos.findIndex((todo) => todo.id == id);

    todos.splice(index, 1);

    this.subject.next(todos);

    return this.http.delete<Todo>(`/api/todos/${id}`);
  }
}
