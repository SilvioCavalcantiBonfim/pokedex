import { Component, Input } from '@angular/core';
import { color } from 'src/app/variables/variables';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  @Input() type: string = '';
  
  public get bg_color() : string {
    if(this.type !== '')
      return color[this.type];
    else
      return 'transparent';
  }
}
