import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { SortbyPipe } from './pipes/sortBy.pipe';

@NgModule({
  declarations: [TodoDetailComponent, EditDialogComponent, SortbyPipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatIconModule,
    MatBadgeModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatIconModule,
    MatBadgeModule,
    TodoDetailComponent,
    MatSlideToggleModule,
    EditDialogComponent,
    SortbyPipe,
  ],
})
export class SharedModule {}
