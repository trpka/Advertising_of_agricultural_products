import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDeactivateCompanyRequestComponent } from './pop-up-deactivate-company-request.component';

describe('PopUpDeactivateCompanyRequestComponent', () => {
  let component: PopUpDeactivateCompanyRequestComponent;
  let fixture: ComponentFixture<PopUpDeactivateCompanyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpDeactivateCompanyRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpDeactivateCompanyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
