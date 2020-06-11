import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rhz-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.less']
})
export class LinkComponent implements OnInit {
  debugger;
  @Input() href: string;
  @Input() text: string;
  @Input() icon: string = null;
  @Input() download: boolean = null;
  @Input() target: boolean = null;
  @Input() color: string = null;
  @Input() bgColor: string = null;
  @Input() hover: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
