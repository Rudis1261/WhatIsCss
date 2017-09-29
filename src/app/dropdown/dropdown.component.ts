import { 
  Component, OnInit, Input, Output, 
  OnChanges, EventEmitter  
} from '@angular/core';

import {
  trigger, state, style, animate,
  transition
} from '@angular/animations';

declare var document: any;
declare var localstorage: any;

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('openModal', [
      state('void', style({
        opacity: '0',
        transform: 'scale(0)'
      })),
      state('*', style({
        opacity: '1',
        transform: 'scale(1)'
      })),
      transition('void => *', animate('100ms ease-in')),
      transition('* => void', animate('250ms ease-out'))
    ]),
    trigger('dropdownTriangle', [
      state('0', style({
        transform: 'none',
      })),
      state('1', style({
        transform: 'rotate(90deg)'
      })),
      transition('0 => 1', animate('100ms ease-in')),
      transition('1 => 0', animate('250ms ease-out'))
    ]),
    trigger('dropdownTriangleAlt', [
      state('0', style({
        transform: 'none',
      })),
      state('1', style({
        transform: 'rotate(-90deg)'
      })),
      transition('0 => 1', animate('100ms ease-in')),
      transition('1 => 0', animate('250ms ease-out'))
    ])
  ]
})
export class DropdownComponent implements OnInit {

  @Input() items = false;
  @Input() setClass = false;
  @Input() style = 1;
  @Input() callback = false;
  @Input() classKey:string = 'class';
  @Output() action: EventEmitter<boolean> = new EventEmitter<boolean>();

  open:boolean = false;
  activeClass:String;

  constructor() { }
  ngOnInit() {
    let theme = localStorage.getItem('theme');
    if (theme) {
      this.setBodyClass(theme, true);
    }
  }

  setBodyClass(className, keepClosed) {
    if (!keepClosed) {
      this.open = !this.open;
    }
    this.activeClass = className;
    
    var bodyClass = document.querySelector('body').classList;
    if (bodyClass.length > 0) {
      bodyClass.forEach((c) => {
        bodyClass.remove(c);
      });
    }

    bodyClass.add(className);
    localStorage.setItem('theme', className);
  }

  setAction(item) {
    if (this.classKey && this.classKey !== '' && item[this.classKey]) {
      this.activeClass = item[this.classKey];
    }

    this.open = false;
    if (!item) {
      return false;
    }

    this.action.emit(item);
  }
}
