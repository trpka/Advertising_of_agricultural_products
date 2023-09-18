import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsForPostingAnnouncementsComponent } from './requests-for-posting-announcements.component';

describe('RequestsForPostingAnnouncementsComponent', () => {
  let component: RequestsForPostingAnnouncementsComponent;
  let fixture: ComponentFixture<RequestsForPostingAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsForPostingAnnouncementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsForPostingAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
