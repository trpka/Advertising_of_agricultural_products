import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRequestDetailsComponent } from './company-request-details.component';

describe('CompanyRequestDetailsComponent', () => {
  let component: CompanyRequestDetailsComponent;
  let fixture: ComponentFixture<CompanyRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRequestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
