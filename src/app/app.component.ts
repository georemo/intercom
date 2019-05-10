import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-nav></app-nav><app-desktop></app-desktop>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intercom';
}
