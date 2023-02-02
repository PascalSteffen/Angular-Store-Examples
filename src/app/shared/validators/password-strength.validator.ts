import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function CreatePasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const nummeric = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && nummeric;

    return !passwordValid ? { passwordStrength: true } : null;
  };
}
