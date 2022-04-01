import { Injectable } from '@angular/core';
import { ProductService } from "./product.service";
import { StoreService } from "./store.service";
import { Router } from "@angular/router";
import { Product } from "../../interfaces/product";
import { CartService } from "./cart.service";
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ProductLogicService {
  cartProductList: Array<Product>;
  favouritesProductList: Array<Product>;
  compareProductList: Array<Product>;
  lang: string;
  isAuthUser: string;
  sessionId: string="";
  
  constructor(
    private store: StoreService,
    private messageService: MessageService,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,

  ) {
    this.cartProductList = [];
    this.favouritesProductList = [];
    this.compareProductList = [];
    this.lang = this.store.get('lang');
    this.isAuthUser = this.store.get('authToken');
  }

  // Public Methods
  public modifyCart(product: any, type: string, newProducts?: any): void {

    this.getStoreData();
    (this.isAuthUser) ? this.userCart(product, type, newProducts) : this.guestCart(product, type, newProducts);
  }

  private getStoreData(): void {
    this.isAuthUser = this.store.get('authToken');
    this.lang = this.store.get('lang');
    this.cartProductList = this.store.get('cartProducts');
    this.favouritesProductList = this.store.get('favouritesProducts');
    this.compareProductList = this.store.get('compareProducts');
  }

  // Cart Section
  private userCart(product: any, type: string, newProducts?: any): void {
    this.cartModificationApi(product, type, newProducts);
  }

  private guestCart(product: any, type: string, newProducts?: any): void {
    this.cartModificationApi(product, type, newProducts);
  }

  private cartModificationApi(product: any, type: string, newProducts?: any): void {
    console.log('type', type)
        product.sessionId = localStorage.getItem('sessionId');
    if (product.sessionId === undefined || product.sessionId === null)
    {
      product.sessionId = GuidGenerator.newGuid()
      localStorage.setItem('sessionId',product.sessionId);
    } 
    // you can use type to call api of add or remove
    switch (type) {
      case 'add':
        this.cartService.addToCart(product)
          .subscribe({
            next: (res: any) => {
              this.cartProductList = res.data.cartItems;
              this.setCartToStore(this.cartProductList, product);
              this.messageService.add({ severity: 'success', summary: 'Cart', detail: 'Successfully Added To Cart' });
            },
            error: (err: any) => {
              this.messageService.add({ severity: 'error', summary: 'Fetch Error', detail: err.message });
            }
          });
        break;
      case 'delete':
        this.cartService.removeItemFromCart(product)
          .subscribe({
            next: (res: any) => {
              this.cartProductList = res.data.cartItems
              this.setCartToStore(newProducts, product);
              this.messageService.add({ severity: 'success', summary: 'Cart', detail: 'Successfully deleted from Cart' });
            },
            error: (err: any) => {
              this.messageService.add({ severity: 'error', summary: 'Fetch Error', detail: err.message });
            }
          });
        break;
        case "update":
          this.cartService.updateCart(product)
            .subscribe({
              next: (res: any) => {
                this.cartProductList = res.data.cartItems
                if (res.data.cartItems !== undefined && res.data.cartItems !== null && res.data.cartItems.length === 0) {
                  localStorage.removeItem('sessionId')
                }
                
                this.setCartToStore(this.cartProductList, product);
                this.messageService.add({ severity: 'success', summary: 'Cart', detail: 'Successfully updated from Cart' });
              },
              error: (err: any) => {
                this.messageService.add({ severity: 'error', summary: 'Fetch Error', detail: err.message });
              }
            });
          break;
    }

  }

  private setCartToStore(cartList: Array<any>, product: any): void {
    this.store.set('cartProducts', cartList);
    this.store.set('cartProductSuccess', product);
  }



  public emptyCart(cartId:any)
  {
    debugger;
      this.cartService.emptyCart(cartId)
        .subscribe({
          next: (res: any) => {
            debugger;
            this.cartProductList = res.data.cartItems
            if (res.data.cartItems !== undefined && res.data.cartItems !== null && res.data.cartItems.length === 0) {
              localStorage.removeItem('sessionId')
            } 
            debugger;
            this.setCartToStore(this.cartProductList, "");
            this.messageService.add({ severity: 'success', summary: 'Cart', detail: 'Successfully updated from Cart' });
          },
          error: (err: any) => {
            this.messageService.add({ severity: 'error', summary: 'Fetch Error', detail: err.message });
          }
        });
  }
}




class GuidGenerator {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}