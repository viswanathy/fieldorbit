﻿import { Component } from '@angular/core';

@Component({
    selector: 'msg-app',
    template: `<nav class="tab-background" md-tab-nav-bar>
  <a md-tab-link *ngFor="let link of navLinks"
     [routerLink]="link.route"
     routerLinkActive #rla="routerLinkActive"
     [active]="rla.isActive">
    {{link.label}}
  </a>
</nav>
<router-outlet></router-outlet>`
})

export class AppComponent {
    navLinks = [{ route: 'servicerequest', label: 'Service Request' },
    { route: 'workrequest', label: 'Work Request' },
    { route: 'job', label: 'Job' }];
}
