import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rhz-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() text: string;
  @Input() icon: string;
  @Input() color: string = null;

  constructor() { }

  ngOnInit(): void {
  }

}
