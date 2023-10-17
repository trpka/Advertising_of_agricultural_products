import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingBasketRegUserComponent } from './shopping-basket-reg-user.component';

describe('ShoppingBasketRegUserComponent', () => {
  let component: ShoppingBasketRegUserComponent;
  let fixture: ComponentFixture<ShoppingBasketRegUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingBasketRegUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingBasketRegUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
