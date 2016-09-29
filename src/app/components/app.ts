import { Component } from '@angular/core';
import './app.css';


@Component({
  selector: 'app',
  template: `
    <h1 class="app-heading">App</h1>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
