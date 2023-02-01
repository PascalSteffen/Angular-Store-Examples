import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user: User = JSON.parse(localStorage.getItem('User'));
    const token = user?.authJwtToken;

    if (!token && req.method == 'POST' && req.url == '/api/login') {
      return next.handle(req);
    } else {
      return next.handle(
        req.clone({ setHeaders: { Authorization: `${token}` } })
      );
    }
  }
}
