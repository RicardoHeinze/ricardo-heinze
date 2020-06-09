import { Component, OnInit, OnDestroy } from '@angular/core';
import * as AOS from 'aos';
import { MenuService } from './services/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  menuVisibility: boolean = false;
  menuVisibilitySubscribe: Subscription;
  
  constructor(private menuService: MenuService) {}
  ngOnInit(): void {
    AOS.init();

    this.menuVisibilitySubscribe = this.menuService.getMenuVisibilityObs().subscribe(menuVisibility => this.menuVisibility = menuVisibility);
  }
  
  ngOnDestroy(): void {
    if(this.menuVisibilitySubscribe)
    this.menuVisibilitySubscribe.unsubscribe();
  }
}
