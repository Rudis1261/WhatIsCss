import { 
  Component, OnInit, Input, Output, 
  OnChanges, EventEmitter  
} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() title:any = false;
  @Input() url:any = false;
  @Input() display_url:any = false;
  @Input() type:any = false;
  @Input() description:any = false;

  ngOnInit() {}
}
