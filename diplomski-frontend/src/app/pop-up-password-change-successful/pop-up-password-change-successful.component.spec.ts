import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPasswordChangeSuccessfulComponent } from './pop-up-password-change-successful.component';

describe('PopUpPasswordChangeSuccessfulComponent', () => {
  let component: PopUpPasswordChangeSuccessfulComponent;
  let fixture: ComponentFixture<PopUpPasswordChangeSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpPasswordChangeSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpPasswordChangeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
