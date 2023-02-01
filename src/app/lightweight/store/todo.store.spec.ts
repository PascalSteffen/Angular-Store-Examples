import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from 'src/app/core/models/todo';
import { TodoStore } from './todo-store';

describe('Todo-Store', () => {
  let todoStore: TodoStore;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoStore],
    });

    todoStore = TestBed.inject(TodoStore);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should load all todos', () => {
    const testData = [
      {
        id: 1,
        title: 'Buy clothes',
        finish: false,
        createdAt: 'string',
        lastUpdateAt: 'string',
      },
      {
        id: 2,
        title: 'Buy clothes',
        finish: false,
        createdAt: 'string',
        lastUpdateAt: 'string',
      },
    ];

    const subject = new BehaviorSubject<Todo[]>([]);
    const todo$: Observable<Todo[]> = subject.asObservable();

    todoStore.loadAllTodosTest().subscribe((todos) => {
      expect(todos).toBeTruthy();
      expect(todos.length).toBe(2);

      subject.next(todos);

      todo$.subscribe((todos) => {
        expect(todos).toBeTruthy();
        expect(todos.length).toBe(2);
      });
    });

    const req = httpTestingController.match('/api/todos');

    expect(req[1].request.method).toEqual('GET');

    req[1].flush(testData);
  });

  it('should updated a todo', () => {
    const testData = [
      {
        id: 1,
        title: 'Buy clothes',
        finish: false,
        createdAt: 'string',
        lastUpdateAt: 'string',
      },
      {
        id: 2,
        title: 'Buy clothes',
        finish: false,
        createdAt: 'string',
        lastUpdateAt: 'string',
      },
    ];

    const subject = new BehaviorSubject<Todo[]>(testData);
    const todo$: Observable<Todo[]> = subject.asObservable();

    const changes: Partial<Todo> = { title: 'Test-Title' };

    const todos = subject.getValue();

    const index = todos.findIndex((todo) => todo.id == 2);

    const newTodo: Todo = {
      ...todos[index],
      ...changes,
    };

    const newTodos: Todo[] = todos.slice(0);

    newTodos[index] = newTodo;

    subject.next(newTodos);

    todo$.subscribe((todos) => {
      expect(todos[1].title).toEqual('Test-Title');
    });

    todoStore.updateTodo(changes, 2).subscribe((todo) => {
      expect(todo.id).toBe(2);
      expect(todo).toBeTruthy();
    });

    const req = httpTestingController.expectOne('/api/todos/2');
    expect(req.request.method).toEqual('PATCH');
    expect(req.request.body.title).toEqual(changes.title);

    req.flush({
      ...testData[1],
      ...changes,
    });
  });

  it('should delete a todo', () => {
    const testData = [
      {
        id: 1,
        title: 'Buy clothes',
        finish: false,
        createdAt: 'string',
        lastUpdateAt: 'string',
      },
      {
        id: 2,
        title: 'Buy clothes',
        finish: false,
        createdAt: 'string',
        lastUpdateAt: 'string',
      },
    ];

    const subject = new BehaviorSubject<Todo[]>(testData);
    const todo$: Observable<Todo[]> = subject.asObservable();

    const todos = subject.getValue();

    const index = todos.findIndex((todo) => todo.id == 2);

    todos.splice(index, 1);

    subject.next(todos);

    todo$.subscribe((todos) => {
      expect(todos.length).toBe(1);
    });

    todoStore.deleteTodo(2).subscribe((todo) => {
      expect(todo.id).toEqual(undefined);
    });

    const req = httpTestingController.expectOne('/api/todos/2');

    expect(req.request.method).toEqual('DELETE');

    req.flush([]);
  });
});
