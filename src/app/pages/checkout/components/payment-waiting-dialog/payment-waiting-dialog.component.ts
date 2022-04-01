import {Component, OnDestroy, OnInit} from '@angular/core';
import {PaymentErrorDialogComponent} from "../payment-error-dialog/payment-error-dialog.component";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-payment-waiting-dialog',
  templateUrl: './payment-waiting-dialog.component.html',
  styleUrls: ['./payment-waiting-dialog.component.scss']
})
export class PaymentWaitingDialogComponent implements OnInit , OnDestroy{

  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService,
              public previousref: DynamicDialogRef,
              public config: DynamicDialogConfig) {}

  ngOnInit(): void {
  }

  errorPayment() {
    this.previousref.destroy();
    this.ref = this.dialogService.open(PaymentErrorDialogComponent, {
      width: '30%',
      height:'100%',
      closable:false,
      showHeader:false,
      closeOnEscape:true
    });

  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

}
