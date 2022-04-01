import {Routes} from "@angular/router";
import {IndexComponent} from "./components/index/index.component";
import { RegisterOtpComponent } from "./components/register-otp/register-otp.component";
import { RegisterResetPasswordComponent } from "./components/register-reset-password/register-reset-password.component";

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'register-otp', component: RegisterOtpComponent },
  { path: 'register-reset-password', component: RegisterResetPasswordComponent },
];
