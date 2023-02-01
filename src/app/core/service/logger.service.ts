import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(text: string) {
    if (isDevMode()) {
      console.log(text);
    }
  }
}
