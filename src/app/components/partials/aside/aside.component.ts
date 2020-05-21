import { Component, OnInit, EventEmitter, Output, Inject, HostListener } from '@angular/core';
import { Types } from 'src/app/models/Types';
import { MenuService } from 'src/app/services/general.service';
import { Utils } from 'src/app/utils/Utils';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'rhz-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.less']
})
export class AsideComponent implements OnInit {
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

  constructor(@Inject(DOCUMENT) private document: Document, private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuList = this.menuService.getMenuList();
   }
}
