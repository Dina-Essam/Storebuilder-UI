import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMethodCartComponent } from './delivery-method-cart.component';

describe('DeliveryMethodCartComponent', () => {
  let component: DeliveryMethodCartComponent;
  let fixture: ComponentFixture<DeliveryMethodCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryMethodCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryMethodCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
