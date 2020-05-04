import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileSectionComponent,
    MainSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
