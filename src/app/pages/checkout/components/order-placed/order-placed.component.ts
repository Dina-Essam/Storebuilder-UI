import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductLogicService } from 'src/app/shared/services/product-logic.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit {
  orderDetails: any;
  cartId: number = 0;

  transactionData: any;
  constructor(private store: StoreService, private cartService: CartService,
    private productLogicService: ProductLogicService) { }

  ngOnInit(): void {
    this.getCurrentCartId();
    this.store.subscription('orderData')
      .subscribe({
        next: (res: any) => {

          console.log(res);
          if (res) {
            this.orderDetails = res;
          }
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    this.store.subscription('transactionData')
      .subscribe({
        next: (res: any) => {
          console.log(res);
          if (res) {
            this.transactionData = res;
          }
        },
        error: (err: any) => {
          console.error(err);
        }
      });

      this.onDeleteCart();
  }


  onDeleteCart() {

    this.productLogicService.emptyCart(this.cartId);
  }


  getCurrentCartId() {
    debugger;
    this.store.subscription('cartProducts')
      .subscribe({
        next: (res: any) => {
          debugger;
          console.log(res);
          this.cartId = res[0].cartId;
        },
        error: (err: any) => {
          console.error(err);
        }
      });
  }

}
