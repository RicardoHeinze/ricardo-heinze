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
    this.coursesList.push(new Types.Course(1, 'Certificado Scrum: Agilidade em seu projeto', 'Alura', '03/2018', 'https://cursos.alura.com.br/certificate/9df72b6b-a0e6-48aa-9f73-48b6ff0e6242'));
    this.coursesList.push(new Types.Course(2, 'Certificado Desenvolvedor Front-end', 'Alura', '05/2018', 'https://cursos.alura.com.br/career/certificate/d3590b8f-97e5-4aef-86f6-ef9380501206'));
    this.coursesList.push(new Types.Course(3, 'Certificado Desenvolvedor AngularJs', 'Alura', '05/2018', 'https://cursos.alura.com.br/career/certificate/fef5ed8f-9081-48b8-8413-bdcf1311c3c8'));
    this.coursesList.push(new Types.Course(4, 'Certificado Desenvolvedor Angular', 'Alura', '05/2018'));
    //this.coursesList.push(new Types.Course(5, 'Typescript', 'Alura','09/2019'));
    this.coursesList.push(new Types.Course(5, 'Bacharelado em Sistemas de Informação', 'Universidade Anhembi Morumbi','12/2019'));
    this.coursesList.push(new Types.Course(6, 'Certificado Desenvolvedor React', 'Alura', '03/2020', 'https://cursos.alura.com.br/degree/certificate/5b7d1e4d-0587-4a45-b7ba-7bd0e4088d51'));
  }

  getCourseList(): Array<Types.Course> {
    return this.coursesList;
  }
}
