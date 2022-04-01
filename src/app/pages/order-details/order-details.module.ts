import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {SharedModule} from "../../shared/modules/shared.module";
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from "primeng/cascadeselect";
@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BreadcrumbModule,
    DialogModule,
    ButtonModule,
    CascadeSelectModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderDetailsModule { }
