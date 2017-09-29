import { Component } from '@angular/core';

@Component({
  selector: 'nav-footer',
  template: `
  <div class="container footer-dropdown">
    <app-dropdown class="right up pull-right" [style]="style" [items]="items" [setClass]="true">Theme</app-dropdown>
  </div>
  <footer>
    <div class="container">
      <a
        class="powered"
        href="https://angular.io"
        title="Powered by AngularJS 2"
        target="_blank"
      >&nbsp;</a>
    </div>
  </footer>
`
})
export class NavFooterComponent {
  style = '2';
  items = [
    {
      'text': 'Theme 1', 
      'class': 'theme1'
    }, { 
      'text': 'Theme 2',
      'class': 'theme2'
    }, { 
      'text': 'Theme 3',
      'class': 'theme3'
    }, { 
      'text': 'Theme 4',
      'class': 'theme4'
    }, { 
      'text': 'Theme 5',
      'class': 'theme5'
    }, { 
      'text': 'Theme 6',
      'class': 'theme6'
    }, { 
      'text': 'Theme 7',
      'class': 'theme7'
    }, { 
      'text': 'Theme 8',
      'class': 'theme8'
    }
  ];
}
