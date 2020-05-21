import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { KnowledgeSectionComponent } from './knowledge-section/knowledge-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileSectionComponent,
    MainSectionComponent,
    PortfolioSectionComponent,
    KnowledgeSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
