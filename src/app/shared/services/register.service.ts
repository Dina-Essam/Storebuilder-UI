import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { checkMobile, registerUser, checkOtp } from '../../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  otpBaseUrl: string;
  userBaseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.otpBaseUrl = `${environment.apiEndPoint}/Auth/OtpUser`;
    this.userBaseUrl = `${environment.apiEndPoint}/Auth/User`;
  }

  checkMobileNumber(data: checkMobile): Observable<object> {
    return this.http.post(`${this.otpBaseUrl}/CheckUserNameAvailability`, data);
  }
  checkOTP(data: checkOtp): Observable<object> {
    return this.http.post(`${this.userBaseUrl}/VerifyMobileNumber`, data);
  }
  registerUser(data: registerUser): Observable<object> {
    return this.http.post(`${this.userBaseUrl}/RegisterPortal`, data);
  }
}