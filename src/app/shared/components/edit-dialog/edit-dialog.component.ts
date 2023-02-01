import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from 'src/app/core/models/todo';
import { TodoStore } from 'src/app/lightweight/store/todo-store';
import { TodoEntitiyService } from 'src/app/ng-rx/services/todo-entity.service';
import { Utils } from '../../utils/utilts';

@Component({
  selector: 'app--edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
  providers: [TodoEntitiyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDialogComponent {
  todo: Todo;

  form: FormGroup;

  dialogTitle: string;

  buttonTitle: string;

  example: 'nrgx' | 'lightweight';

  mode: 'create' | 'update' | 'delete';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private todoService: TodoEntitiyService,
    private utils: Utils,
    private todoStore: TodoStore
  ) {
    this.dialogTitle = data.dialogTitle;
    this.buttonTitle = data.buttonTitle;
    this.example = data.example;
    this.todo = data.todo;
    this.mode = data.mode;

    const formControls = {
      title: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
      finish: [false],
    };

    if (this.mode == 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({ ...data.todo });
    } else if (this.mode == 'create' || this.mode == 'delete') {
      this.form = this.fb.group(formControls);
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    const todoData: Todo = {
      id: this.todo?.id,
      ...this.form.value,
    };
    if (this.mode == 'create' && this.example == 'nrgx') {
      this.todoService.add(todoData).subscribe({
        error: () =>
          this.utils.alert(
            'There has been an error. Todo was not created.',
            3000
          ),
        complete: () => {
          this.onClose();
          this.utils.alert('Todo successfully created.', 3000);
        },
      });
    } else if (this.mode == 'update' && this.example == 'nrgx') {
      this.todoService.update(todoData).subscribe({
        error: () =>
          this.utils.alert(
            'There has been an error. Todo was not updated.',
            3000
          ),
        complete: () => {
          this.onClose();
          this.utils.alert('Todo successfully updated.', 3000);
        },
      });
    } else if (this.mode == 'delete' && this.example == 'nrgx') {
      this.todoService.delete(this.todo.id).subscribe({
        error: () =>
          this.utils.alert(
            'There has been an error. Todo was not deletet.',
            3000
          ),
        complete: () => {
          this.onClose();
          this.utils.alert('Todo successfully deleted.', 3000);
        },
      });
    } else if (this.mode == 'create' && this.example == 'lightweight') {
      this.todoStore.createTodo(todoData).subscribe({
        error: () =>
          this.utils.alert(
            'There has been an error. Todo was not created.',
            3000
          ),
        complete: () => {
          this.onClose();
          this.utils.alert('Todo successfully created.', 3000);
        },
      });
    } else if (this.mode == 'update' && this.example == 'lightweight') {
      this.todoStore.updateTodo(todoData, this.todo.id).subscribe({
        error: () =>
          this.utils.alert(
            'There has been an error. Todo was not updated.',
            3000
          ),
        complete: () => {
          this.onClose();
          this.utils.alert('Todo successfully updated.', 3000);
        },
      });
    } else if (this.mode == 'delete' && this.example == 'lightweight') {
      this.todoStore.deleteTodo(this.todo.id).subscribe({
        error: () =>
          this.utils.alert(
            'There has been an error. Todo was not deletet.',
            3000
          ),
        complete: () => {
          this.onClose();
          this.utils.alert('Todo successfully deleted.', 3000);
        },
      });
    }
  }

  get title() {
    return this.form.controls['title'];
  }
}
