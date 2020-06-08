import { Injectable } from '@angular/core';
import { Types } from '../models/Types';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuList: Array<Types.MenuItem> = [];
  constructor() {
    this.setMenuList();
  }

  setMenuList(): void {
    this.menuList.push(new Types.MenuItem(1, 'Home', ''));
    this.menuList.push(new Types.MenuItem(2, 'Mini CV.', 'cv'));
    this.menuList.push(new Types.MenuItem(3, 'Portfolio', 'portfolio'));
    this.menuList.push(new Types.MenuItem(4, 'Contato', 'contato'));
  }

  getMenuList(): Array<Types.MenuItem> {
    return this.menuList;
  }
}
