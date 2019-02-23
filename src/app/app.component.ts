import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="content-wrapper">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
    <ngx-spinner
        bdColor="rgba(51, 51, 51, 0.8)"
        size="medium"
        color="#fff"
        type="ball-spin-clockwise-fade"
    ></ngx-spinner>
    <notifier-container></notifier-container>
  `
})
export class AppComponent {
  title = 'vsh-frontend';
}
