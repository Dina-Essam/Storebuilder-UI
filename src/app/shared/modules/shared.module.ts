import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "../components/product-card/product-card.component";
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BadgeModule} from 'primeng/badge';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TranslateModule} from "@ngx-translate/core";
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CarouselModule,
    BadgeModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    DividerModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    CarouselModule,
    BadgeModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    DividerModule
  ]
})
export class SharedModule { }
