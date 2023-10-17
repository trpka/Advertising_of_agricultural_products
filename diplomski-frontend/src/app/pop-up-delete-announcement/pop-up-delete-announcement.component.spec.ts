import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDeleteAnnouncementComponent } from './pop-up-delete-announcement.component';

describe('PopUpDeleteAnnouncementComponent', () => {
  let component: PopUpDeleteAnnouncementComponent;
  let fixture: ComponentFixture<PopUpDeleteAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpDeleteAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpDeleteAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
