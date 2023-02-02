import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Utils } from 'src/app/shared/utils/utilts';
import { CreatePasswordStrengthValidator } from 'src/app/shared/validators/password-strength.validator';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss'],
})
export class CreateUserDialogComponent {
  hide = true;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]*'),
        Validators.minLength(8),
        CreatePasswordStrengthValidator(),
      ],
    ],
  });

  constructor(
    private dialog: MatDialogRef<CreateUserDialogComponent>,
    private fb: FormBuilder,
    private authService: AuthService,
    private utils: Utils
  ) {}

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  onSave() {
    const newUser = {
      ...this.form.value,
      isAdmin: false,
    };

    this.authService.createUser(newUser).subscribe({
      error: () =>
        this.utils.alert('User was not created. Email already exist.', 3000),
      complete: () => {
        this.onClose();
        this.utils.alert('User successfully created.', 3000);
      },
    });
  }

  onClose() {
    this.dialog.close();
  }
}
