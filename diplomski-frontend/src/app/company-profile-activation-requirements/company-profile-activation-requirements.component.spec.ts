import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileActivationRequirementsComponent } from './company-profile-activation-requirements.component';

describe('CompanyProfileActivationRequirementsComponent', () => {
  let component: CompanyProfileActivationRequirementsComponent;
  let fixture: ComponentFixture<CompanyProfileActivationRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfileActivationRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileActivationRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
