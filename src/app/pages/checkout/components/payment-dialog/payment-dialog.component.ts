import {Component, OnDestroy, OnInit} from '@angular/core';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ActivatedRoute, Router} from "@angular/router";
import {PaymentErrorDialogComponent} from "../payment-error-dialog/payment-error-dialog.component";
import {PaymentWaitingDialogComponent} from "../payment-waiting-dialog/payment-waiting-dialog.component";

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent implements OnInit, OnDestroy{
  value: number =1;
  paymentOptions: any[];
  creditcardNumber: any;
  CardholderName: any;
  checked: boolean = false;
  phoneNumber: any;
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService,
              public previousref: DynamicDialogRef,
              public config: DynamicDialogConfig) {
  this.paymentOptions = [
      { name: 'MoMo', value: 1 ,icon:'pi pi-credit-card'},
      { name: 'Card', value: 2 ,icon:'pi pi-credit-card'},
    ];
  }

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

  waitingPayment() {
    this.previousref.destroy();
    this.ref = this.dialogService.open(PaymentWaitingDialogComponent, {
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
