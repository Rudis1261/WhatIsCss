import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare var ga:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private currentRoute:string;

  constructor(public router: Router) {
    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        if (event.urlAfterRedirects) {
          ga('set', 'page', event.urlAfterRedirects);
        }
        ga('send', 'pageview', event.url);
      }
    });
  }
}
