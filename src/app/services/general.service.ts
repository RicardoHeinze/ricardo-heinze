import { Injectable } from '@angular/core';
import { MenuItem } from '../models/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  getMenuList(): Array<MenuItem> {
    const menuList = new Array<MenuItem>();

    menuList.push(new MenuItem(1, 'Home', ''));
    menuList.push(new MenuItem(2, 'Mini CV.', 'cv'));
    menuList.push(new MenuItem(3, 'Portfolio', 'portfolio'));
    menuList.push(new MenuItem(4, 'Contato', 'contato'));

    return menuList;
  }
}
