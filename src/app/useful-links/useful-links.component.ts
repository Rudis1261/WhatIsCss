import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.scss']
})
export class UsefulLinksComponent implements OnInit {

  items = [
    {
      "title": "Border-Radius.com",
      "url": "http://border-radius.com/",
      "display_url": "http://border-radius.com/",
      "type": "Tool",
      "description": "Pretty rad tool I have used over the years to quickly get a cross platform border-radius"
    }, {
      "title": "BrowserStack.com",
      "url": "https://browserstack.com/",
      "display_url": "https://browserstack.com/",
      "type": "Testing",
      "description": "BrowserStack is well, one of a kind. Allowing you to test on actual devices to make sure your Website looks the way you intend over various devices"
    }, {
      "title": "DigitalOcean.com",
      "url": "https://m.do.co/c/0a4286f8fc50",
      "display_url": "https://www.digitalocean.com/",
      "type": "Hosting",
      "description": "A great place to get started when starting to run your own servers and applications. Charged for usage, it's ideal for testing things out. Much simpler than AWS in my opinion. Compute for developers."
    }, {
      "title": "litmus.com",
      "url": "https://litmus.com/",
      "display_url": "https://litmus.com/",
      "type": "Email Testing",
      "description": "Best email testing service bar-none in my opinion. If you think web development is hard, email templates are 10 times worse"
    }, {
      "title": "CodePen.io",
      "url": "https://codepen.io/",
      "display_url": "https://codepen.io/",
      "type": "Playground",
      "description": "Pretty awesome service allowing you to quickly mock up and idea. Great for quick, dirty prototypes"
    }, {
      "title": "JsFiddle",
      "url": "https://jsfiddle.net/",
      "display_url": "https://jsfiddle.net/",
      "type": "Playground",
      "description": "Pretty awesome service allowing you to quickly mock up and idea. Great for quick, dirty prototypes"
    }, {
      "title": "CanIuse.com",
      "url": "http://caniuse.com/",
      "display_url": "http://caniuse.com/",
      "type": "Tool",
      "description": "The goto place when you need to check what CSS feature is supported by which browser, and at what version. Who wants to support IE anyway?"
    }, {
      "title": "Icomoon.io App",
      "url": "https://icomoon.io/app/#",
      "display_url": "https://icomoon.io/app/",
      "type": "Tool",
      "description": "My goto when it comes to creating a websites icon set. It's not like we have the skill or the time to try and create beautiful icons which all work together"
    }, {
      "title": "GitHub.com",
      "url": "https://github.com/",
      "display_url": "https://github.com/",
      "type": "Tool",
      "description": "Version controlling your software is very important. Getting people to contribute good for your success. GitHub is your one stop code repository shop when you are all about open source, or want to keep your code secure"
    }, {
      "title": "Firebase",
      "url": "https://firebase.google.com/",
      "display_url": "https://firebase.google.com/",
      "type": "Hosting",
      "description": "Firebase is probably one of the best services I have used in a long long time. If Google buys your company, and puts their name on it, you can be assured you did something right"
    }, {
      "title": "Angular",
      "url": "https://angular.io",
      "display_url": "https://angular.io",
      "type": "JS Library",
      "description": "Another one from the powerhouse that is Google. The latest rendition of their bespoke JS Framework, helping you quickly create amazing user experiences without necessarily knowing the complex JavaScript it builds on"
    }, {
      "title": "Google Fonts",
      "url": "https://fonts.google.com/",
      "display_url": "https://fonts.google.com/",
      "type": "Fonts",
      "description": "If you like your website to look amazing with your own favorite font. Google's got your back again. With their amazing interface to the world's best open source fonts"
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('WhatIsCss.com | Useful Links');
  }

  ngOnInit() {}
}
