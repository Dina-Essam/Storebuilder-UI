import { Component, OnInit } from '@angular/core';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-payment-error-dialog',
  templateUrl: './payment-error-dialog.component.html',
  styleUrls: ['./payment-error-dialog.component.scss']
})
export class PaymentErrorDialogComponent implements OnInit {

  constructor(public dialogService: DialogService,
              public previousref: DynamicDialogRef,
              public config: DynamicDialogConfig,
              private router: Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  viewOrders() {
    this.previousref.destroy();
    this.router.navigate(['success'], {relativeTo: this.activatedRoute});
  }
}
