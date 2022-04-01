import { StoreService } from './../../../../shared/services/store.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import {OrderService} from "../../../../shared/services/order.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute,
    @Inject(OrderService) private orderService: OrderService,
    private store:StoreService) {}
  reasons: any[] = [];
  selectedReason: any;
  orderItems : any[] = [];
  order : any;
  order_id : any ;
  ngOnInit() {
    this.items = [
      {icon: 'pi pi-angle-left', label:'Your orders', routerLink: '/orders'}
    ];
    this.primengConfig.ripple = true;
    this.reasons = [
      {
        details: "1- Ordered by mistake",
      },
      {
        details: "2- Ordered by mistake",
      },
      {
        details: "3- Ordered by mistake",
      },
      {
        details: "4- Ordered by mistake",
      },
    ];
    this.order_id = this.route.snapshot.params['id'];
    console.log(this.order_id);
    this.loadData();
  }
  displayModal:  boolean = false;
  approvedModal:  boolean = false;

  cancelOrderModal() {
    this.displayModal = true;
  }
  cancelApprovedModal() {
    this.displayModal = false;
    this.approvedModal = true;
  }
  loadData(): void {
    this.store.set("loading",true);
    this.orderService.getOrder(this.order_id)
      .subscribe({
        next: (res: any) => {
          this.order = res.data;
          this.orderItems = res.data.order_items;
          this.store.set("loading",false);
        },
        error: (err: any) => {
          console.error(err);
          this.store.set("loading",false);
        }
      })
  }

}
