import { Component, OnInit, EventEmitter, Output, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MenuItem } from 'src/app/models/MenuItem';
import { GeneralService } from 'src/app/services/general.service';
import { Utils } from 'src/app/utils/Utils';

@Component({
  selector: 'rhz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Output() menuVisibilityEvent: EventEmitter<boolean> = new EventEmitter();
  menuVisibility: boolean = false;
  menuList: Array<MenuItem> = [];

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
  constructor(@Inject(DOCUMENT) private document: Document, private generalService: GeneralService) { }

  ngOnInit(): void {
    this.menuList = this.generalService.getMenuList();
  }

  toggleMenuVisibility(): void {
    this.menuVisibility = !this.menuVisibility;

    if(this.menuVisibility){
      Utils.lockWindow();
    } else {
      Utils.unlockWindow();
    }
    
    this.menuVisibilityEvent.emit(this.menuVisibility);
  }
}
