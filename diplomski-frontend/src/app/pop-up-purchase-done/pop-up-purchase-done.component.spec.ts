import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPurchaseDoneComponent } from './pop-up-purchase-done.component';

describe('PopUpPurchaseDoneComponent', () => {
  let component: PopUpPurchaseDoneComponent;
  let fixture: ComponentFixture<PopUpPurchaseDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpPurchaseDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpPurchaseDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
