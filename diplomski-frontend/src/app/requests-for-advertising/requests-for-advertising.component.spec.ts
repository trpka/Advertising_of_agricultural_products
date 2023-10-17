import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsForAdvertisingComponent } from './requests-for-advertising.component';

describe('RequestsForAdvertisingComponent', () => {
  let component: RequestsForAdvertisingComponent;
  let fixture: ComponentFixture<RequestsForAdvertisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsForAdvertisingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsForAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
