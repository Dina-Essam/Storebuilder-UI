import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BadgeModule} from 'primeng/badge';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TranslateModule} from "@ngx-translate/core";
import {DividerModule} from 'primeng/divider';
import {ToastModule} from 'primeng/toast';
import {InputSwitchModule} from 'primeng/inputswitch';
import {RatingModule} from 'primeng/rating';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ProductCardComponent} from "../components/product-card/product-card.component";
import {ProductSliderComponent} from "../components/product-slider/product-slider.component";
import {SectionComponent} from "../components/section/section.component";
import { CategoryCardComponent } from '../components/category-card/category-card.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductSliderComponent,
    CategoryCardComponent,
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
    InputSwitchModule,
    RatingModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    OverlayPanelModule,
    ToastModule,
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
    ToastModule,
    InputSwitchModule,
    RatingModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    OverlayPanelModule,
    FormsModule,
    ProductCardComponent,
    ProductSliderComponent,
    SectionComponent,
    CategoryCardComponent,
    RouterModule
  ]
})
export class SharedModule {
}
