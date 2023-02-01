import { Component } from '@angular/core';
import { AuthService } from './core/service/auth.service';
import { LoadingService } from './core/service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Todo-Frontend';

  constructor(
    private authService: AuthService,
    public loadingService: LoadingService
  ) {}
}
