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
  currentAccordion: number = 1;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.professionalExperienceList = this.experienceService.getProfessionalExperiencesItems();
  }

  openAccordion(ID: number) {
    if(this.currentAccordion === ID){
      this.currentAccordion = null;
      return;
    }

    this.currentAccordion = ID;
  }
}
