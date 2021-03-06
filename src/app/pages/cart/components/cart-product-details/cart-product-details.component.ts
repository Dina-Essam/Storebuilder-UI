import { Component, EventEmitter, Input, Output } from '@angular/core';
import { zip } from 'rxjs';
import { StoreService } from 'src/app/shared/services/store.service';
import { environment } from 'src/environments/environment';
import { ProductLogicService } from "../../../../shared/services/product-logic.service";

@Component({
  selector: 'app-cart-product-details',
  templateUrl: './cart-product-details.component.html',
  styleUrls: ['./cart-product-details.component.scss']
})
export class CartProductDetailsComponent {
  @Input() product: any = {} as any;
  @Input() products: any = {} as any;

  // @Input()  productsChange: Array<any> = [];
  @Output() getProductsChange = new EventEmitter<any>();

  @Input() index: number = 0 as number;
  quantityProcessed:boolean=false;
  baseUrl: string;

  constructor(private productLogicService: ProductLogicService, private store: StoreService) {
    this.baseUrl = environment.apiEndPoint + "/";
  }





  handleMinus(product: any) {
    this.quantityProcessed=true;
    if (product.quantity > 0) {
      product.quantity = product.quantity - 1;
      this.productLogicService.modifyCart(product, "update", this.products)
      .subscribe(res => this.quantityProcessed=false);
    }
    else if (product.quantity == 0) {
      this.onDelete(product);
    }

  }

  handlePlus(product: any) {
    this.quantityProcessed=true;
    product.quantity = product.quantity + 1;
    this.productLogicService.modifyCart(product, "update", this.products)
    .subscribe(res => this.quantityProcessed=false);
  }

  onDelete(product: any) {
    product.quantity = 0;
    this.products = this.products.filter((x: any) => x.id !== product.id);
    this.productLogicService.modifyCart(product, "update", this.products)
    .subscribe(res => this.quantityProcessed=false);
    this.getProductsChange.emit(this.products)
  }

  updateQuantity(quantity: number,product:any) {
    this.quantityProcessed=true;
    if (quantity == 0)
    {
      this.onDelete(product);
    }
    else if (quantity > 0)
    {
      product.quantity = quantity;
      this.productLogicService.modifyCart(product,"update", this.products)
        .subscribe(res => this.quantityProcessed=false);
    }

  }
}
