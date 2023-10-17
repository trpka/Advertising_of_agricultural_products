import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddProductIntoBasketComponent } from './pop-up-add-product-into-basket.component';

describe('PopUpAddProductIntoBasketComponent', () => {
  let component: PopUpAddProductIntoBasketComponent;
  let fixture: ComponentFixture<PopUpAddProductIntoBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpAddProductIntoBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAddProductIntoBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
