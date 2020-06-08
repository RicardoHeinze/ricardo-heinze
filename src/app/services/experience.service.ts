import { Injectable } from '@angular/core';
import { Types } from '../models/Types';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  professionalExperienceList: Array<Types.ProfessionalExperience> = [];

  constructor() {
    this.setProfessionalExperiencesItems();
  }

  setProfessionalExperiencesItems(): void {

    const experienceList: Array<Types.Experience> = [];
    experienceList.push(new Types.Experience(1, 'Sistema PDV', 'Refatoração das telas do PDV para implementação de novas funcionalidades e novo layout – AngularJS / Typescript / CSS3 / HTML5'));
    experienceList.push(new Types.Experience(2, 'Sistema Marketplace B2B', 'Reescrita da interface do sistema utilizando Angular 8 para aplicação do novo padrão visual e inclusão de novas funcionalidades – Angular 8 / Typescript / CSS3 / HTML'));
    experienceList.push(new Types.Experience(3, 'Site marketup.com', 'Otimização de SEO do site e melhora do ranking do PageSpeed – Wordpress / Javascript / CSS3'));
    experienceList.push(new Types.Experience(4, 'Sistema ERP', 'Facelift da interface, manutenção e inclusão de novas funcionalidades – AngularJS / Typescript / CSS3 / HTML5'));
    experienceList.push(new Types.Experience(5, 'Versões Whitelabel do ERP', 'Adequação visual da interface para parceiros que utilizam o sistema no modelo Whitelabel'));
    experienceList.push(new Types.Experience(6, 'Versão Mobile do ERP', 'Ajustes na versão web mobile do ERP'));
    experienceList.push(new Types.Experience(7, 'Criação de e-mails promocionais', 'Desenvolvimento de e-mail marketing para parceiros utilizando HTML / CSS3'));
    
    this.professionalExperienceList.push(new Types.ProfessionalExperience(1, 'MarketUP (sistema web de gestão empresarial para PMEs)', experienceList));
  }

  getProfessionalExperiencesItems(): Array<Types.ProfessionalExperience> {
    return this.professionalExperienceList;
  }
}
