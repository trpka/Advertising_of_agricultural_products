import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRequestToPublishAnnouncementComponent } from './pop-up-request-to-publish-announcement.component';

describe('PopUpRequestToPublishAnnouncementComponent', () => {
  let component: PopUpRequestToPublishAnnouncementComponent;
  let fixture: ComponentFixture<PopUpRequestToPublishAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpRequestToPublishAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpRequestToPublishAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
