import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Types } from 'src/app/models/Types';
import { MenuService } from 'src/app/services/menu.service';
import { Utils } from 'src/app/utils/Utils';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rhz-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.less']
})
export class AsideComponent implements OnInit {
  menuVisibility: boolean = false;
  menuVisibilitySubscribe: Subscription;

  menuList: Array<Types.MenuItem> = [];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rhzAside = document.getElementById('rhz-aside');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      rhzAside.classList.remove('transparent');
      rhzAside.classList.add('filled');
    } else {
      rhzAside.classList.remove('filled');
      rhzAside.classList.add('transparent');
    }
  }

  constructor(private menuService: MenuService) { }
  
  ngOnInit(): void {
    this.menuList = this.menuService.getMenuList();
   }

   closeMenu(): void {
    Utils.unlockWindow();
    this.menuService.setMenuVisibilityObs(false);
   }
}
