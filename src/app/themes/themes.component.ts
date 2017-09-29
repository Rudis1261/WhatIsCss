import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  themes: Array<String>;
  styles: Array<String>;

  constructor() {
    this.themes = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8'
    ];

    this.styles = [
      'primary',
      'secondary',
      'tertiary',
      'altPrimary',
      'altSecondary'
    ];
  }

  ngOnInit() {}
}
