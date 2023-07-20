import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanizationAnnouncementsComponent } from './mechanization-announcements.component';

describe('MechanizationAnnouncementsComponent', () => {
  let component: MechanizationAnnouncementsComponent;
  let fixture: ComponentFixture<MechanizationAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanizationAnnouncementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanizationAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
