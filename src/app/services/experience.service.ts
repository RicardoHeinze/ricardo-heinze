import { Injectable } from "@angular/core";
import { Types } from "../models/Types";

@Injectable({
  providedIn: "root",
})
export class ExperienceService {
  professionalExperienceList: Array<Types.ProfessionalExperience> = [];

  constructor() {
    this.setProfessionalExperiencesItems();
  }

  setProfessionalExperiencesItems(): void {
    this.professionalExperienceList.push(
      new Types.ProfessionalExperience(
        1,
        "Stefanini Orbitall (Processamento de Meios de Pagamento e Iniciativas Digitais)",
        "orbitall",
        this.getStefaniniOrbitallExperience()
      )
    );

    this.professionalExperienceList.push(
      new Types.ProfessionalExperience(
        2,
        "MarketUP (sistema web de gestão empresarial para PMEs)",
        "marketup",
        this.getMarketUPExperience()
      )
    );


  }

  getStefaniniOrbitallExperience = (): Types.Experience[] => {
    const experienceList: Array<Types.Experience> = [];

    experienceList.push(
      new Types.Experience(
        1,
        "Aplicativo Ipiranga AbasteceAi PJ",
        "Construção de aplicativo de core bancário com integração a funcionalidades do PIX – React Native / Typescript / Styled Components"
      )
    );
    experienceList.push(
      new Types.Experience(
        2,
        "Aplicativo Bib Bahamas",
        "Reescrita de aplicativo bancário utilizando Typescript para implementação de funcionalidade de multi-idiomas – React Native / Typescript / Styled Components"
      )
    );
    experienceList.push(
      new Types.Experience(
        3,
        "Aplicativo Whitelabel",
        "Construção de aplicativo de core bancário whitelabel totalmente parametrizável para diversos clientes – React Native / Typescript / Styled Components"
      )
    );
    experienceList.push(
      new Types.Experience(
        4,
        "Backoffice Orbitall",
        "Construção de sistema web responsivo whitelabel para gerenciamento de clientes e transações que utilizavam nosso core bancário – React / Typescript / GraphQL / Styled Components"
      )
    );
    experienceList.push(
      new Types.Experience(
        5,
        "Aplicativo Fidiscard ",
        "Implementação de aplicativo para gerenciamento de cartões – React Native / Typescript / Styled Components"
      )
    );
    return experienceList;
  };

  getMarketUPExperience = (): Types.Experience[] => {
    const experienceList: Array<Types.Experience> = [];

    experienceList.push(
      new Types.Experience(
        1,
        "Sistema PDV",
        "Refatoração das telas do PDV para implementação de novas funcionalidades e novo layout – AngularJS / Typescript / CSS3 / HTML5"
      )
    );
    experienceList.push(
      new Types.Experience(
        2,
        "Sistema Marketplace B2B",
        "Reescrita da interface do sistema utilizando Angular 8 para aplicação do novo padrão visual e inclusão de novas funcionalidades – Angular 8 / Typescript / CSS3 / HTML"
      )
    );
    experienceList.push(
      new Types.Experience(
        3,
        "Site marketup.com",
        "Otimização de SEO do site e melhora do ranking do PageSpeed – Wordpress / Javascript / CSS3"
      )
    );
    experienceList.push(
      new Types.Experience(
        4,
        "Sistema ERP",
        "Facelift da interface, manutenção e inclusão de novas funcionalidades – AngularJS / Typescript / CSS3 / HTML5"
      )
    );
    experienceList.push(
      new Types.Experience(
        5,
        "Versões Whitelabel do ERP",
        "Adequação visual da interface para parceiros que utilizam o sistema no modelo Whitelabel"
      )
    );
    experienceList.push(
      new Types.Experience(
        6,
        "Versão Mobile do ERP",
        "Ajustes na versão web mobile do ERP"
      )
    );
    experienceList.push(
      new Types.Experience(
        7,
        "Criação de e-mails promocionais",
        "Desenvolvimento de e-mail marketing para parceiros utilizando HTML / CSS3"
      )
    );

    return experienceList;
  };

  getProfessionalExperiencesItems = (): Array<Types.ProfessionalExperience> =>
    this.professionalExperienceList;
}
