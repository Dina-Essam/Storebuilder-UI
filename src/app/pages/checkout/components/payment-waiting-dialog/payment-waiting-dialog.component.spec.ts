import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentWaitingDialogComponent } from './payment-waiting-dialog.component';

describe('PaymentWaitingDialogComponent', () => {
  let component: PaymentWaitingDialogComponent;
  let fixture: ComponentFixture<PaymentWaitingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentWaitingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentWaitingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
