import { Injectable } from '@angular/core';
import { Types } from '../models/Types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuList: Array<Types.MenuItem> = [];
  private menuVisibilityObs$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.setMenuList();
  }

  getMenuVisibilityObs(): Observable<boolean> {
    return this.menuVisibilityObs$.asObservable();
  }

  setMenuVisibilityObs(visibility: boolean) {
      this.menuVisibilityObs$.next(visibility);
  }

  setMenuList(): void {
    this.menuList.push(new Types.MenuItem(1, 'Desenvolvedor', 'profileSection'));
    this.menuList.push(new Types.MenuItem(2, 'Portfólio', 'portfolioSection'));
    this.menuList.push(new Types.MenuItem(3, 'Conhecimentos', 'knowledgeSection'));
    this.menuList.push(new Types.MenuItem(4, 'Experiência', 'professionalExperienceSection'));
    this.menuList.push(new Types.MenuItem(5, 'Formação', 'formationSection'));
    this.menuList.push(new Types.MenuItem(6, 'Contato', 'contactSection'));
  }

  getMenuList(): Array<Types.MenuItem> {
    return this.menuList;
  }
}
