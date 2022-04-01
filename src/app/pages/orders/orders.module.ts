import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {SharedModule} from "../../shared/modules/shared.module";
import {BreadcrumbModule} from 'primeng/breadcrumb';
@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BreadcrumbModule,
    RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }
