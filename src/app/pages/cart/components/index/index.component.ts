import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CartService } from 'src/app/shared/services/cart.service';
import {StoreService} from '../../../../shared/services/store.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  products: Array<any> = [];
  constructor( private store: StoreService,
    private cartService: CartService,
    private messageService: MessageService  ) {  }

  ngOnInit(): void {
    this.getCartProducts();
  }

  addItem(event:any){
     this.getCartProducts();
    // this.products= this.store.get('cartProducts');

    //  this.products =event;
  }



  getCartProducts(): void {

    this.store.subscription('cartProducts')
    .subscribe({
      next: (res: any) => {
        this.products = res
        console.log(this.products);
      },
      error: (err: any) => {
        console.error(err);
      }
    });
    // var sessionId=localStorage.getItem('sessionId')||'';
    // this.cartService.getCart(sessionId)
    //   .subscribe({
    //     next: (res: any) => {
    //       if(res.data.records[0]!=undefined){
    //       this.store.set('cartProducts', res.data.records[0].cartDetails)
    //       this.products = res.data.records[0].cartDetails;
    //       console.log(res.data);
    //       }
    //     },
    //     error: (err: any) => {

    //       console.error(err);
    //       this.messageService.add({severity:'error', summary: 'Fetch Error', detail: err.message});
    //     },
    //     complete: () => console.log('cartProducts complete')
    //   });
  }

}
