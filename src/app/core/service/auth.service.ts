import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { AppState } from 'src/app/core/reducers';
import { select, Store } from '@ngrx/store';
import { AuthActions } from '../store/actions-types';
import { isLoggedIn, isLoggedOut } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$: Observable<boolean>;

  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    const user = JSON.parse(localStorage.getItem('User'));

    if (user) {
      this.store.dispatch(AuthActions.login({ user: user }));
    }

    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));

    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>('/api/login', { email, password });
  }

  createUser(user: Partial<User>) {
    return this.http.post<User>('/api/users', user);
  }
}
