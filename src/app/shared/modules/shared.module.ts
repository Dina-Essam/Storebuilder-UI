import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BadgeModule} from 'primeng/badge';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TranslateModule} from "@ngx-translate/core";
import {DividerModule} from 'primeng/divider';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ProductCardComponent} from "../components/product-card/product-card.component";
import {ProductSliderComponent} from "../components/product-slider/product-slider.component";
import {SectionComponent} from "../components/section/section.component";

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductSliderComponent,
    SectionComponent
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
    RouterModule
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
    FormsModule,
    ProductCardComponent,
    ProductSliderComponent,
    SectionComponent,
    RouterModule
  ]
})
export class SharedModule {
}
