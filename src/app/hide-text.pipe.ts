import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

declare var document: any;

@Pipe({
  name: 'hideText'
})
export class HideTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let element = document.createElement("div");
    element.innerText = value;
    let escaped = element.innerHTML;

    //element.innerHTML = value;
    //let string = element.innerText;

    let parts = value.split('');
    parts.forEach((part, index) => {

      if (part == '<') {
        part = '&gt;';
      }
      if (part == '>') {
        part = '&lt;';
      }

      parts[index] = '<span class="hollow_part">' + part + '</span>';
    });
    console.log(parts, escaped);

    //escaped = escaped.replace(value, parts.join(''));
    //let element2 = document.createTextNode("div");

    return escaped;
  }
}
