import { Component, OnInit, EventEmitter, Output, Inject, HostListener } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem';
import { GeneralService } from 'src/app/services/general.service';
import { Utils } from 'src/app/utils/Utils';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'rhz-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.less']
})
export class AsideComponent implements OnInit {
  menuList: Array<MenuItem> = [];

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

  constructor(@Inject(DOCUMENT) private document: Document, private generalService: GeneralService) { }

  ngOnInit(): void {
    this.menuList = this.generalService.getMenuList();
   }
}
