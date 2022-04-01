import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  items: MenuItem[] = [];
  selectedproducts: string[] = [];
  selectedproducts1: string[] = [];
  checked: boolean = false;
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.items = [
      {icon: 'pi pi-angle-left', label:'Your orders', routerLink: '/orders'}
    ];
    this.primengConfig.ripple = true;
  }
  displayRequestRefundModal:  boolean = false;
  displayApprovedModal:  boolean = false;
  displayReviewModal:  boolean = false;
  displaySubmitReviewModal:  boolean = false;

  reviewModal() {
    this.displayReviewModal = true;
  }
  submitReviewModal() {
    this.displayReviewModal = false;
    this.displaySubmitReviewModal = true;
  }
  closeModal(){
    this.displaySubmitReviewModal = false;
  }
  requestRefundModal() {
    this.displayRequestRefundModal = true;
  }
  refundApprovedModal() {
    this.displayRequestRefundModal = false;
    this.displayApprovedModal = true;
  }

}
