import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { IndexComponent } from './components/index/index.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/modules/shared.module";
import { BannerComponent } from './components/banner/banner.component';
import {CategorySliderComponent} from './components/category-slider/category-slider.component';
import {SectionCategoryComponent} from './components/section-category/section.component';
import {routes} from "./routes";


@NgModule({
  declarations: [
    MainSliderComponent,
    IndexComponent,
    BannerComponent,
    CategorySliderComponent,
    SectionCategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
