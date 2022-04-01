import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { OrderService } from 'src/app/shared/services/order.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.scss']
})
export class CheckoutCardComponent  {
  @Input() products: Array<any>=new Array<any>();
   orderDetailsList=new Array<any>();
  constructor(private orderService:OrderService
    ,private router:Router,private store: StoreService,
        private messageService: MessageService,
    ) { }

  CreateOrder():void
  {
    this.store.set("loading",true);

    var totalPrice=0.0;
    for(let i=0;i<this.products.length;i++)
    {
      var productDetails={
        productId:this.products[i].productId,
        PriceId:this.products[i].priceId,
        ShopId:this.products[i].shopId,
        SpecsProductId:this.products[i].specsProductId,
        price:this.products[i].quantity*this.products[i].price,
        quantity:this.products[i].quantity
      }
      totalPrice+=(this.products[i].quantity*this.products[i].price)
      this.orderDetailsList.push(productDetails);
    }
    var order={
      ItemCount:this.products.length,
      Total:totalPrice,
      OrderDetailList:this.orderDetailsList
    }
    this.orderService.createOrder(order)
      .subscribe({
        next: (res: any) => {
          this.store.set("loading",false);

          if(res.success)
          {
            console.log("order",res);
            this.store.set('orderData',{orderId:res.data,productDetails:this.orderDetailsList,orderAmount:totalPrice});
            this.router.navigate(['/checkout']);

          // this.messageService.add({severity:'success', summary: 'Login', detail: 'Logged In Successfully'});
          }
          else{
            this.store.set('orderData','');


            this.messageService.add({severity:'error', summary: 'Fetch Error'});
          }
        },
        error: (err: any) => {
          this.store.set("loading",false);

          this.store.set('orderData','');

          this.messageService.add({severity:'error', summary: 'Fetch Error', detail: err.message});
        }
      })
  }

}
