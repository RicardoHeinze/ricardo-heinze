import { Injectable } from '@angular/core';
import { Types } from '../models/Types';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesList: Array<Types.Course> = [];

  constructor() { 
    this.setCourseList();
  }

  setCourseList(): void {
    this.coursesList.push(new Types.Course(1, 'Certificado Scrum: Agilidade em seu projeto', 'Alura', '03/2018', '/assets/files/certificados/scrum-alura.pdf'));
    this.coursesList.push(new Types.Course(2, 'Certificado SQL e MySql', 'Alura', '04/2018', '/assets/files/certificados/sql-mysql-alura.pdf'));
    this.coursesList.push(new Types.Course(3, 'Certificado Desenvolvedor Front-end', 'Alura', '05/2018', '/assets/files/certificados/dev-frontend-alura.pdf'));
    this.coursesList.push(new Types.Course(4, 'Certificado Desenvolvedor AngularJs', 'Alura', '05/2018', '/assets/files/certificados/angularjs-alura.pdf'));
    this.coursesList.push(new Types.Course(5, 'Certificado Desenvolvedor Angular', 'Alura', '05/2018'));
    this.coursesList.push(new Types.Course(6, 'Bacharelado em Sistemas de Informação', 'Universidade Anhembi Morumbi','12/2019'));
    this.coursesList.push(new Types.Course(7, 'Certificado Desenvolvedor React', 'Alura', '03/2020', '/assets/files/certificados/react-alura.pdf'));
  }

  getCourseList(): Array<Types.Course> {
    return this.coursesList;
  }
}
