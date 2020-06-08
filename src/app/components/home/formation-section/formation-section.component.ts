import { Component, OnInit } from '@angular/core';
import { Types } from 'src/app/models/Types';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'rhz-formation-section',
  templateUrl: './formation-section.component.html',
  styleUrls: ['./formation-section.component.less']
})
export class FormationSectionComponent implements OnInit {
  coursesList: Array<Types.Course> = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesList = this.coursesService.getCourseList();
  }
}
