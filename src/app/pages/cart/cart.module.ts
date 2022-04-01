import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {SharedModule} from "../../shared/modules/shared.module";
import {RippleModule} from "primeng/ripple";
import { CartProductDetailsComponent } from './components/cart-product-details/cart-product-details.component';
import { CheckoutCardComponent } from './components/checkout-card/checkout-card.component';
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component';


@NgModule({
  declarations: [
    IndexComponent,
    CartProductDetailsComponent,
    CheckoutCardComponent,
    EmptyCartComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        RippleModule
    ]
})
export class CartModule { }
