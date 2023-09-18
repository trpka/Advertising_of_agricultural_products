import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingRequestComponent } from './advertising-request.component';

describe('AdvertisingRequestComponent', () => {
  let component: AdvertisingRequestComponent;
  let fixture: ComponentFixture<AdvertisingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisingRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
