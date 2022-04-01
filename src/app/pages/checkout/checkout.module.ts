import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import {SharedModule} from "../../shared/modules/shared.module";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {RippleModule} from "primeng/ripple";
import { PaymentCartComponent } from './components/payment-cart/payment-cart.component';
import { DeliveryMethodCartComponent } from './components/delivery-method-cart/delivery-method-cart.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import { OrderSummaryCartComponent } from './components/order-summary-cart/order-summary-cart.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { PaymentDialogComponent } from './components/payment-dialog/payment-dialog.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import {InputMaskModule} from "primeng/inputmask";
import {CheckboxModule} from "primeng/checkbox";
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';
import { PaymentErrorDialogComponent } from './components/payment-error-dialog/payment-error-dialog.component';
import { PaymentWaitingDialogComponent } from './components/payment-waiting-dialog/payment-waiting-dialog.component';

@NgModule({
  declarations: [
    IndexComponent,
    PaymentCartComponent,
    DeliveryMethodCartComponent,
    OrderSummaryCartComponent,
    PaymentDialogComponent,
    OrderPlacedComponent,
    PaymentErrorDialogComponent,
    PaymentWaitingDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    RippleModule,
    RadioButtonModule,
    DropdownModule,
    DynamicDialogModule,
    SelectButtonModule,
    InputMaskModule,
    CheckboxModule
  ],
  entryComponents: [
    PaymentDialogComponent
  ]
})
export class CheckoutModule { }
