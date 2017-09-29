import { Component, OnInit, Input, Output, ChangeDetectorRef,
OnChanges, EventEmitter } from '@angular/core';
import { LoadscriptService } from '../loadscript.service';
import { DomSanitizer } from '@angular/platform-browser'

declare var ace: any;
declare var window: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  html: any;
  css: any;
  htmlEditor: any;
  cssEditor: any;
  iframeSrcDoc: any;
  activeTab: any;
  isMobile: any = false;

  @Input() htmlEnabled = true;
  @Input() cssEnabled = true;
  @Input() outputEnabled = true;

  constructor(private LS: LoadscriptService, private DS: DomSanitizer, private cdr: ChangeDetectorRef) {
    this.iframeSrcDoc = '';

    window.onresize = () => {
      this.detect();
    };

    if (this.htmlEnabled) {
      this.activeTab = 'html';
    }

    if (!this.htmlEnabled && this.cssEnabled) {
      this.activeTab = 'css';
    }

    this.css = `.red {
  color: red;
}`;

    this.html = `<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <h1>Hello World</h1>
    <b class="red">I am red</b>
  </body>
</html>`;
  }

  ngOnInit() {
    let init = this.init;
    let scope = this;
    this.LS.loadScript("assets/ace/ace.js", "js", () => {
      setTimeout(() => {
        init(scope);
      }, 100);
    });
  }

  getWindow() {
    return window.innerWidth;
  }

  detect() {
    this.isMobile = (this.getWindow() <= 768);
    if (this.isMobile) {
      this.htmlEditor.setOption('showGutter', false);
      this.cssEditor.setOption('showGutter', false);
    } else {
      this.htmlEditor.setOption('showGutter', true);
      this.cssEditor.setOption('showGutter', true);
    }
  }

  init(scope) {

    // HTML
    if (scope.htmlEnabled) {
      scope.htmlEditor = ace.edit("html-editor");
      scope.htmlEditor.setTheme("ace/theme/monokai");
      scope.htmlEditor.session.setMode("ace/mode/html");
      scope.htmlEditor.setValue(scope.html);

      scope.htmlEditor.getSession().on('change', function(e) {
        scope.update();
      });
    }

    // CSS
    if (scope.cssEnabled) {
      scope.cssEditor = ace.edit("css-editor");
      scope.cssEditor.setTheme("ace/theme/monokai");
      scope.cssEditor.session.setMode("ace/mode/css");
      scope.cssEditor.setValue(scope.css);

      scope.cssEditor.getSession().on('change', function(e) {
        scope.update();
      });
    }

    scope.detect();

    if (scope.outputEnabled) {
      scope.update();
    }
  }

  update() {
    let css = '';
    let html = '';

    if (this.cssEnabled) {
      css = this.cssEditor.getValue();
    }

    if (this.htmlEnabled) {
      html = this.htmlEditor.getValue();
    }

    let template = '<html>\
  <head>\
    <style type="text/css">\
     ' + css + '\
    </style>\
    <title>Simple Editor</title>\
  </head>\
  <body>' + html + '</body>\
</html>';

    let src = this.DS.bypassSecurityTrustHtml(template);
    this.iframeSrcDoc = src;
  }
}
