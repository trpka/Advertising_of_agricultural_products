import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsRecentComponent } from './announcements-recent.component';

describe('AnnouncementsRecentComponent', () => {
  let component: AnnouncementsRecentComponent;
  let fixture: ComponentFixture<AnnouncementsRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementsRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
