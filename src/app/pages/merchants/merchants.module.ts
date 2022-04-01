import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../shared/modules/shared.module";
import {IndexComponent} from './components/index/index.component';
import {MerchantBlockComponent} from './components/merchant-block/merchant-block.component';
import {routes} from "./routes";
import {MerchantFilterPipe} from './pipes/merchant-filter.pipe';


@NgModule({
  declarations: [
    IndexComponent,
    MerchantBlockComponent,
    MerchantFilterPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MerchantsModule {
}
