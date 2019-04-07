import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOrganizationAddComponent } from './profile-organization-add.component';

describe('ProfileOrganizationAddComponent', () => {
  let component: ProfileOrganizationAddComponent;
  let fixture: ComponentFixture<ProfileOrganizationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileOrganizationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOrganizationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
