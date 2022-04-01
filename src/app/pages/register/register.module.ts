import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {SharedModule} from "../../shared/modules/shared.module";
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from "primeng/inputmask";
import { RegisterOtpComponent } from './components/register-otp/register-otp.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import {environment} from "../../../environments/environment";
import {PasswordModule} from 'primeng/password';
import { RegisterResetPasswordComponent } from './components/register-reset-password/register-reset-password.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    IndexComponent,
    RegisterOtpComponent,
    RegisterResetPasswordComponent
  ],
  imports: [
    
    CommonModule,
    SharedModule,
    PasswordModule,
    InputTextModule,
    InputMaskModule,
    FormsModule,
    DialogModule,
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
export class RegisterModule { }
