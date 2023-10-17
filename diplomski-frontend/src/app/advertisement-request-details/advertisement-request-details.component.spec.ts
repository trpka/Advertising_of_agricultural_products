import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementRequestDetailsComponent } from './advertisement-request-details.component';

describe('AdvertisementRequestDetailsComponent', () => {
  let component: AdvertisementRequestDetailsComponent;
  let fixture: ComponentFixture<AdvertisementRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementRequestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
