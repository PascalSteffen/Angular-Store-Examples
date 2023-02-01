import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  constructor(private _snackBar: MatSnackBar) {}

  alert(message: string, duration: number) {
    this._snackBar.open(message, '', {
      duration: duration,
    });
  }
}

export function sortTodosForNgRx(a: any, b: any) {
  const sort = a.finish - b.finish;

  if (sort > 0) {
    return 1;
  } else if (sort < 0) {
    return -1;
  } else return 0;
}
