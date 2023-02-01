import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/models/todo';
import { TodoStore } from '../store/todo-store';

@Component({
  selector: 'app-lightweight',
  templateUrl: './lightweight.component.html',
  styleUrls: ['./lightweight.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightweightComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private todoStore: TodoStore) {}

  ngOnInit(): void {
    this.todos$ = this.todoStore.todo$;
  }
}
