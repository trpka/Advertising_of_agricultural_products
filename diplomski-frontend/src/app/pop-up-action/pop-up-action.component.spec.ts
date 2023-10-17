import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpActionComponent } from './pop-up-action.component';

describe('PopUpActionComponent', () => {
  let component: PopUpActionComponent;
  let fixture: ComponentFixture<PopUpActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
