import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpActivateAnnouncementComponent } from './pop-up-activate-announcement.component';

describe('PopUpActivateAnnouncementComponent', () => {
  let component: PopUpActivateAnnouncementComponent;
  let fixture: ComponentFixture<PopUpActivateAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpActivateAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpActivateAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
