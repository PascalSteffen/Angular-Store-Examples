import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EditDialogComponent } from 'src/app/shared/components/edit-dialog/edit-dialog.component';
import { Todo } from '../../../core/models/todo';
import { defaultDialogConfig } from '../../utils/default-dialog-config';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDetailComponent {
  @Input()
  todos$: Observable<Todo[]>;

  @Input()
  example: string;

  constructor(private dialog: MatDialog) {}

  addTodo() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Create Todo',
      buttonTitle: 'Add Todo',
      example: this.example,
      mode: 'create',
    };

    this.dialog.open(EditDialogComponent, dialogConfig);
  }

  updateTodo(todo: Todo) {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Update Todo',
      buttonTitle: 'Update Todo',
      example: this.example,
      todo,
      mode: 'update',
    };

    this.dialog.open(EditDialogComponent, dialogConfig);
  }

  deleteTodo(todo: Todo) {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Delete Todo',
      buttonTitle: 'Delete Todo',
      example: this.example,
      todo,
      mode: 'delete',
    };

    this.dialog.open(EditDialogComponent, dialogConfig);
  }
}
