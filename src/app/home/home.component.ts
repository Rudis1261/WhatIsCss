import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  site:any = false;
  type:any = 'styled';
  files:any = false;
  types:any = false;
  callback: any = true;
  classKey: string = '';

  constructor(
    public db: AngularFireDatabase,
    private titleService: Title
  ) {
    this.titleService.setTitle('WhatIsCss.com | Home');
    this.classKey = 'url';
    this.db.object('/home').subscribe((data) => {
      this.types = data.types;
      this.files = data.files;
      this.site = this.files[0];
    });
  }

  handleAction(e) {
    if (!e) {
      return false;
    }

    this.type = 'styled';
    this.site = e;
  }

  setType(type) {
    this.type = type;
  }
}
