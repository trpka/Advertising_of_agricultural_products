import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpActivateCompanyRequestComponent } from './pop-up-activate-company-request.component';

describe('PopUpActivateCompanyRequestComponent', () => {
  let component: PopUpActivateCompanyRequestComponent;
  let fixture: ComponentFixture<PopUpActivateCompanyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpActivateCompanyRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpActivateCompanyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
