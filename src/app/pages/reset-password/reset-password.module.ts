import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {SharedModule} from "../../shared/modules/shared.module";
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
    PasswordModule,
    InputTextModule,
    InputMaskModule,
    RouterModule.forChild(routes)
  ]
})
export class ResetPasswordModule { }
