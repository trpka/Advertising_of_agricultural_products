import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRegisteredUserComponent } from './profile-registered-user.component';

describe('ProfileRegisteredUserComponent', () => {
  let component: ProfileRegisteredUserComponent;
  let fixture: ComponentFixture<ProfileRegisteredUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileRegisteredUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRegisteredUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
