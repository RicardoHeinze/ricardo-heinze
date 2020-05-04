import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rhz-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.less']
})
export class LinkComponent implements OnInit {
  @Input() href: string;
  @Input() text: string;
  @Input() icon: string;
  @Input() download: boolean = null;
  @Input() color: string = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
