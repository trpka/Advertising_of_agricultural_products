import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanizationAnnouncements1Component } from './mechanization-announcements1.component';

describe('MechanizationAnnouncements1Component', () => {
  let component: MechanizationAnnouncements1Component;
  let fixture: ComponentFixture<MechanizationAnnouncements1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanizationAnnouncements1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanizationAnnouncements1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
