import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/core/reducers';
import { isLoggedIn } from '../store/auth.selectors';
import { LoggerService } from '../service/logger.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private loggerService: LoggerService
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedIn),
      tap((loggedIn) => {
        if (!loggedIn) {
          this.router.navigateByUrl('/login');
          this.loggerService.log('[Auth-Guard] => Routing successed.');
        }
      })
    );
  }
}
