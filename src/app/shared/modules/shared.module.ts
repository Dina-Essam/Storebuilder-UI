import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from "../components/product-card/product-card.component";
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BadgeModule} from 'primeng/badge';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TranslateModule} from "@ngx-translate/core";
import {DividerModule} from 'primeng/divider';
import {ProductSliderComponent} from "../components/product-slider/product-slider.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductSliderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CarouselModule,
    BadgeModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    DividerModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    CarouselModule,
    BadgeModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    DividerModule,
    ProductCardComponent,
    ProductSliderComponent,
    FormsModule
  ]
})
export class SharedModule {
}
