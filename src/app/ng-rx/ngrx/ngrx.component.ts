import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/models/todo';
import { TodoEntitiyService } from '../services/todo-entity.service';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgrxComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoEntitiyService) {}

  ngOnInit() {
    this.todos$ = this.todoService.entities$;
  }
}
