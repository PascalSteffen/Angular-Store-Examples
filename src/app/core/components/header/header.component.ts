import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/service/auth.service';
import { AuthActions } from 'src/app/core/store/actions-types';
import { AppState } from '../../reducers';
import { LoggerService } from '../../service/logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    private store: Store<AppState>,
    private loggerService: LoggerService
  ) {}

  logout() {
    this.store.dispatch(AuthActions.logout());
    this.loggerService.log('[Logout] => User was deleted from the store.');
  }
}
