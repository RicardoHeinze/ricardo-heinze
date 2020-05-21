import { Injectable } from '@angular/core';
import { Types } from '../models/Types';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {
  private knowledgeList: Array<Types.KnowledgeItem> = [];

  constructor() {
    this.setKnowledgeItems();
  }

  setKnowledgeItems(): void {

    this.knowledgeList.push(new Types.KnowledgeItem(1, 'HTML5', 'html.png', 'HTML'));
    this.knowledgeList.push(new Types.KnowledgeItem(2, 'CSS3', 'css.png', 'CSS'));
    this.knowledgeList.push(new Types.KnowledgeItem(3, 'Javascript', 'javascript.png', 'JS'));
    this.knowledgeList.push(new Types.KnowledgeItem(4, 'Design Responsivo', 'responsive.png', 'Responsivo'));
    this.knowledgeList.push(new Types.KnowledgeItem(5, 'Angular 2+', 'angular.png', 'Angular 2+'));
    this.knowledgeList.push(new Types.KnowledgeItem(6, 'AngularJS', 'angularjs.png', 'AngularJS'));
    this.knowledgeList.push(new Types.KnowledgeItem(7, 'React', 'react.png', 'React'));
    this.knowledgeList.push(new Types.KnowledgeItem(8, 'Typescript', 'typescript.png', 'TS'));
    this.knowledgeList.push(new Types.KnowledgeItem(9, 'Less', 'less.png', 'Less'));
    this.knowledgeList.push(new Types.KnowledgeItem(10, 'Sass', 'sass.png', 'Sass'));
    this.knowledgeList.push(new Types.KnowledgeItem(11, 'Bootstrap', 'bootstrap.png', 'Bootstrap'));
    this.knowledgeList.push(new Types.KnowledgeItem(12, 'jQuery', 'jquery.png', 'jQuery'));
    this.knowledgeList.push(new Types.KnowledgeItem(13, 'Wordpress', 'wordpress.png', 'WP'));
    this.knowledgeList.push(new Types.KnowledgeItem(14, 'Git', 'git.png', 'Git'));
    this.knowledgeList.push(new Types.KnowledgeItem(15, 'Scrum', 'scrum.png', 'Scrum'));
    //this.knowledgeList.push(new Types.KnowledgeItem(15, 'Kanban', 'kanban.png', 'Kanban'));
    this.knowledgeList.push(new Types.KnowledgeItem(16, 'SEO', 'seo.png', 'SEO'));
  }

  getKnowledgeItems(): Array<Types.KnowledgeItem> {
    return this.knowledgeList;
  }
}
