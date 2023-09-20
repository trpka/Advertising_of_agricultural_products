import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpProfileChangeSuccessfulComponent } from './pop-up-profile-change-successful.component';

describe('PopUpProfileChangeSuccessfulComponent', () => {
  let component: PopUpProfileChangeSuccessfulComponent;
  let fixture: ComponentFixture<PopUpProfileChangeSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpProfileChangeSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpProfileChangeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
