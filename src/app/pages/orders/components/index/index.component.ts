import { Component, OnInit, Inject } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {OrderService} from "../../../../shared/services/order.service";
import {StoreService} from "../../../../shared/services/store.service";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  ordersNumbers: number = 0;
  items: MenuItem[] = [];
  orders: any[] = [];
  constructor(
    @Inject(OrderService) private orderService: OrderService,
    private store:StoreService,
  ) {
  }

  ngOnInit() {
    this.items = [
      {icon: 'pi pi-angle-left', label:'Your account', routerLink: '/account'}
    ];
    this.loadData();
  }
  loadData(): void {
    this.store.set("loading",true);

    this.orderService.getAllOrders()
      .subscribe({
        next: (res: any) => {
          this.orders = res.data.records;
          console.log(this.orders);
          this.ordersNumbers = this.orders.length;
         this.store.set("loading",false);

        },
        error: (err: any) => {
          console.error(err);
         this.store.set("loading",false);

        }
      })
  }


}
