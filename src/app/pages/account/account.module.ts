import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {SharedModule} from "../../shared/modules/shared.module";
import {AddressComponent} from './components/address/address.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import {environment} from "../../../environments/environment";

@NgModule({
  declarations: [
    IndexComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: environment.apiKey,
      language: 'en',
      libraries: ['geometry', 'places']
    }),
    RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
