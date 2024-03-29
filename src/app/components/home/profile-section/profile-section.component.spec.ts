import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSectionComponent } from './profile-section.component';

describe('ProfileComponent', () => {
  let component: ProfileSectionComponent;
  let fixture: ComponentFixture<ProfileSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
