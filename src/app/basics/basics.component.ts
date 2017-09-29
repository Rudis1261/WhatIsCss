import { Component, OnInit } from '@angular/core';
import { LoadscriptService } from '../loadscript.service';
import { Title } from '@angular/platform-browser';

declare var hljs: any;
declare var document: any;

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  example: any;
  htmlTags: any;

  constructor(private LS: LoadscriptService, private titleService: Title) {
    this.titleService.setTitle('WhatIsCss.com | Basics');
    this.example = {};
    this.htmlTags = [];

    this.example.html_1 = `<!doctype html>
<html>
  <head></head>
  <body></body>
</html>`;

    this.example.html_2 = `<div>I am the content</div>`;
    this.example.html_3 = `<div>`;
    this.example.html_4 = `</div>`;

    this.example.css_1 = `.hello {
  color: orange;
}

.world {
  color: lime;
}`;

    this.htmlTags.push({'tag': '<html></html>', 'description': 'The main parent tag'});
    this.htmlTags.push({'tag': '<head></head>', 'description': 'Used to define scripts, CSS style, metadata, site title and much more'});
    this.htmlTags.push({'tag': '<body></body>', 'description': 'This is where you place all your elements which need to be displayed by the browser'});
    this.htmlTags.push({'tag': '<footer></footer>', 'description': 'You can also print out elements in a footer, but this can also be placed in the body'});
    this.htmlTags.push({'tag': '<p></p>', 'description': 'A paragraph element'});
    this.htmlTags.push({'tag': '<span></span>', 'description': 'A span of text'});
    this.htmlTags.push({'tag': '<img>', 'description': 'Image element'});
    this.htmlTags.push({'tag': '<hr>', 'description': 'Horizontal Ruler'});
    this.htmlTags.push({'tag': '<br>', 'description': 'Line Break'});
    this.htmlTags.push({'tag': '<b></b>', 'description': 'Make text bold'});
    this.htmlTags.push({'tag': '<i></i>', 'description': 'Italic text'});
    this.htmlTags.push({'tag': '<ul></ul>', 'description': 'Underlined text'});
    this.htmlTags.push({'tag': '<a></a>', 'description': 'An anchor tag is used to link to other sites and pages'});
  }

  ngOnInit() {
    this.LS.loadScript("//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/default.min.css", "css");
    this.LS.loadScript("//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/highlight.min.js", "js", () => {
      this.LS.loadScript("//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/languages/scss.min.js", "js");
      this.LS.loadScript("//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/languages/css.min.js", "js");
      this.LS.loadScript("//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/monokai-sublime.min.css", "css");

      document.querySelectorAll('pre, code').forEach((block) => {
        hljs.highlightBlock(block);
      });
    });
  }
}
