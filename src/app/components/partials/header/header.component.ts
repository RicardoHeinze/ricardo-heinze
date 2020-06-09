import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Types } from 'src/app/models/Types';
import { MenuService } from 'src/app/services/menu.service';
import { Utils } from 'src/app/utils/Utils';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rhz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  menuVisibilitySubscribe: Subscription;
  fragmentSubscribe: Subscription;

  menuVisibility: boolean = false;
  menuList: Array<Types.MenuItem> = [];
  fragment: string;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rhzHeader = document.getElementById('rhz-header');

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      rhzHeader.classList.remove('transparent');
      rhzHeader.classList.add('filled');
    } else {
      rhzHeader.classList.remove('filled');
      rhzHeader.classList.add('transparent');
    }
  }

  constructor(private menuService: MenuService, private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    if(this.menuVisibilitySubscribe){
      this.menuVisibilitySubscribe.unsubscribe();
    }

    if(this.fragmentSubscribe){
      this.fragmentSubscribe.unsubscribe
    }
  }

  ngOnInit(): void {
    this.menuList = this.menuService.getMenuList();
    this.fragmentSubscribe = this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    this.menuVisibilitySubscribe = this.menuService.getMenuVisibilityObs().subscribe(menuVisibility => {
      this.menuVisibility = menuVisibility
    });
  }

  toggleMenuVisibility(): void {
    this.menuVisibility = !this.menuVisibility;

    if(this.menuVisibility){
      Utils.lockWindow();
    } else {
      Utils.unlockWindow();
    }

    this.menuService.setMenuVisibilityObs(this.menuVisibility)
  }
}