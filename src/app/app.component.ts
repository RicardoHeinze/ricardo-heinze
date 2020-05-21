import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  menuVisibility: boolean = false;

  constructor() {}
  ngOnInit(): void {
    AOS.init();
  }

  toggleMenuVisibility(visibility: boolean): void {
    this.menuVisibility = visibility;
  }
}
