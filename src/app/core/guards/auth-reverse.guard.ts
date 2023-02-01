import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/core/reducers';
import { isLoggedOut } from '../store/auth.selectors';

@Injectable()
export class AuthReverseGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedOut),
      tap((loggedOut) => {
        if (!loggedOut) {
          this.router.navigateByUrl('/options');
        }
      })
    );
  }
}
