import { Component, Input } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { LoadingService } from '../../service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Input()
  detectRoutingOngoing = false;

  constructor(public loadingService: LoadingService, private router: Router) {}

  ngOnInit(): void {
    if (this.detectRoutingOngoing) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loadingService.loadingOn();
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationError ||
          event instanceof NavigationCancel
        ) {
          this.loadingService.loadingOff();
        }
      });
    }
  }
}
