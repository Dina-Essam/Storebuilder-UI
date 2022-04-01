import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import {SharedModule} from "../../shared/modules/shared.module";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from "primeng/inputmask";


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    PasswordModule,
    InputTextModule,
    InputMaskModule
  ]
})
export class SignInModule { }
