import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryCartComponent } from './order-summary-cart.component';

describe('OrderSummaryCartComponent', () => {
  let component: OrderSummaryCartComponent;
  let fixture: ComponentFixture<OrderSummaryCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSummaryCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummaryCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
