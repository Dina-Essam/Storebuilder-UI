import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/modules/shared.module';
import {RouterModule} from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { DetailsComponent } from './components/details/details.component';
import {routes} from './routes';
import { ImageZoomComponent } from './components/image-zoom/image-zoom.component';
import {NgxImageZoomModule} from "ngx-image-zoom";
import {CarouselModule} from "primeng/carousel";
import {FloatingPanelComponent} from './components/floating-panel/floating-panel.component';



@NgModule({
  declarations: [
    IndexComponent,
    DetailsComponent,
    ImageZoomComponent,
    FloatingPanelComponent,
  ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild(routes),
      NgxImageZoomModule,
      CarouselModule
    ]
})
export class ProductDetailsModule { }
