import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rhz-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent implements OnInit {
  debugger;
  @Input() type: string;
  @Input() text: string;
  @Input() icon: string = null;
  @Input() color: string = null;
  @Input() bgColor: string = null;
  @Input() hover: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
