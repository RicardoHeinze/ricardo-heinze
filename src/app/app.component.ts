import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  menuVisibility: boolean = false;

  constructor() {}

  toggleMenuVisibility(visibility: boolean): void {
    this.menuVisibility = visibility;
  }
}
