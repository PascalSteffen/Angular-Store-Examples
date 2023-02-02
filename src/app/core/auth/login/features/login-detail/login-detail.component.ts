import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, tap, throwError } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { AuthActions } from 'src/app/core/store/actions-types';
import { AppState } from 'src/app/core/reducers';
import { LoggerService } from 'src/app/core/service/logger.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserDialogComponent } from '../../../create-user-dialog/create-user-dialog.component';
import { defaultDialogConfig } from 'src/app/shared/utils/default-dialog-config';

@Component({
  selector: 'app-login-detail',
  templateUrl: './login-detail.component.html',
  styleUrls: ['./login-detail.component.scss'],
})
export class LoginDetailComponent {
  hide = true;

  form = this.fb.group({
    email: ['admin@email.com', [Validators.required, Validators.email]],
    password: [
      'admin',
      [Validators.required, Validators.pattern('[a-zA-Z0-9]*')],
    ],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<AppState>,
    private loggerService: LoggerService,
    private dialog: MatDialog
  ) {}

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  login() {
    const data = this.form.value;

    this.authService
      .login(data.email, data.password)
      .pipe(
        catchError((err) => {
          this.loggerService.log(
            '[Login] => User profile was saved in the store.'
          );
          return throwError(() => err);
        }),
        tap((user) => {
          this.store.dispatch(AuthActions.login({ user }));
          this.router.navigateByUrl('/options');
          this.loggerService.log(
            '[Login] => User profile was saved in the store.'
          );
        })
      )
      .subscribe();
  }

  createUserDialog() {
    const dialogConfig = defaultDialogConfig();

    this.dialog.open(CreateUserDialogComponent, dialogConfig);
  }
}
