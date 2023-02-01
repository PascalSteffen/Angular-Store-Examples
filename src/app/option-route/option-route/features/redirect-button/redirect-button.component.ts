import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redirect-button',
  templateUrl: './redirect-button.component.html',
  styleUrls: ['./redirect-button.component.scss'],
})
export class RedirectButtonComponent {
  @Input()
  title: string;

  @Input()
  route: string;
}
