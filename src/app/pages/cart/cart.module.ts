import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {SharedModule} from "../../shared/modules/shared.module";


@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CartModule { }
