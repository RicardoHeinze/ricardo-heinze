import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { Types } from 'src/app/models/Types';

@Component({
  selector: 'rhz-professional-experience-section',
  templateUrl: './professional-experience-section.component.html',
  styleUrls: ['./professional-experience-section.component.less']
})
export class ProfessionalExperienceSectionComponent implements OnInit {
  professionalExperienceList: Array<Types.ProfessionalExperience> = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.professionalExperienceList = this.experienceService.getProfessionalExperiencesItems();
  }

}
