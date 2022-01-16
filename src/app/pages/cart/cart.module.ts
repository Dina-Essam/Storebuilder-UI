import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {SharedModule} from "../../shared/modules/shared.module";
import { TagModule } from 'primeng/tag';
import {InputNumberModule} from 'primeng/inputnumber';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { PaymentIconsComponent } from '../../shared/components/payment-icons/payment.component';
@NgModule({
  declarations: [
    IndexComponent,
    PaymentIconsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TagModule,
    InputNumberModule,
    CardModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class CartModule { }
