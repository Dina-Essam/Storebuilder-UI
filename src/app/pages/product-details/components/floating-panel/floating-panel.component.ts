import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Product} from "../../../../interfaces/product";
import {Currency} from "../../../../interfaces/global";
import { ProductLogicService } from 'src/app/shared/services/product-logic.service';
import { StoreService } from 'src/app/shared/services/store.service';
@Component({
  selector: 'app-floating-panel',
  templateUrl: './floating-panel.component.html',
  styleUrls: ['./floating-panel.component.scss']
})
export class FloatingPanelComponent implements OnInit {

  @Input() product: Product = {} as Product;
  @Input() currency: Currency = {} as Currency;
  cartId :string ='0';
  constructor(
    private productLogicService: ProductLogicService,
    private store: StoreService
  ) {
  }

  ngOnInit(): void {
    this.getCartId();
  }
  addItem(productItem:Product)
  {

         productItem.quantity = 1;
         productItem.cartId =this.cartId;
       this.productLogicService.modifyCart(productItem,"add");
  }

  getCartId(){
    this.store.subscription('cartProducts')
    .subscribe({
      next: (res: any) => {
        if(res.length > 0 ){
          this.cartId = res[0].cartId;
        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

}
