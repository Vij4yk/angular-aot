import { Component } from '@angular/core';
import './app.scss';


@Component({
  selector: 'app',
  template: `
    <h1 class="app-heading">App</h1>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
