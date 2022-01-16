import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentIconsComponent } from './payment.component';

describe('ProductCarouselComponent', () => {
  let component: PaymentIconsComponent;
  let fixture: ComponentFixture<PaymentIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
