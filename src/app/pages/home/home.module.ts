import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { IndexComponent } from './components/index/index.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {SharedModule} from "../../shared/modules/shared.module";
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';


@NgModule({
  declarations: [
    MainSliderComponent,
    IndexComponent,
    CategoryCardComponent,
    BannerComponent,
    CategorySliderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
