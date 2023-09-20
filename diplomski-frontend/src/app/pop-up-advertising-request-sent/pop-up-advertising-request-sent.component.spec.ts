import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAdvertisingRequestSentComponent } from './pop-up-advertising-request-sent.component';

describe('PopUpAdvertisingRequestSentComponent', () => {
  let component: PopUpAdvertisingRequestSentComponent;
  let fixture: ComponentFixture<PopUpAdvertisingRequestSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpAdvertisingRequestSentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAdvertisingRequestSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
