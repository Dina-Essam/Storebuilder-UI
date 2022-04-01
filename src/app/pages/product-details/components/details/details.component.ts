import {Component, Input, OnInit} from '@angular/core';
import {AddProductToCart, Product} from "../../../../interfaces/product";
import {Currency} from "../../../../interfaces/global";
import {Title} from "@angular/platform-browser";
import {ReviewsService} from "../../../../shared/services/reviews.service";
import {MessageService} from 'primeng/api';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductLogicService } from 'src/app/shared/services/product-logic.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() product: Product = {} as Product;

  @Input() currency: Currency = {} as Currency
  showMore: boolean = false;
  reviewLimit: number = 0;
  cartId :string ='0';
  constructor(
    private title: Title,
    private reviewService: ReviewsService,
    private productLogicService: ProductLogicService,
    private messageService: MessageService,
    private store: StoreService
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle(this.product.productName);
    this.loadMoreReviews();
    this.getCartId();
  }

  readMore(): void {
    this.showMore = !this.showMore
  }

  loadMoreReviews(): void {
    this.reviewLimit += 10;
    // this.reviewService.getProductReviews(this.product.id, {limit: this.reviewLimit})
    //   .subscribe({
    //     next: (res: any) => {
    //       console.log('Review', res);
    //       this.product.reviews.push(...res.data)
    //     },
    //     error: (err: any) => {
    //       console.error(err);
    //       this.messageService.add({severity: 'error', summary: 'Fetch Error', detail: err.message});
    //     }
    //   })
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

  getCartProducts(): void {

}
}
