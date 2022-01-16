import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import {SharedModule} from "../../shared/modules/shared.module";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RadioButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
