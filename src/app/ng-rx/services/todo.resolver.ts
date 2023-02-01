import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { filter, first, Observable, tap } from 'rxjs';
import { LoggerService } from 'src/app/core/service/logger.service';
import { TodoEntitiyService } from './todo-entity.service';

@Injectable()
export class TodoResolver implements Resolve<boolean> {
  constructor(
    private todoService: TodoEntitiyService,
    private loggerService: LoggerService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.todoService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.todoService.getAll();
          this.loggerService.log(
            '[Todo Resolver] => data was saved in the store.'
          );
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
