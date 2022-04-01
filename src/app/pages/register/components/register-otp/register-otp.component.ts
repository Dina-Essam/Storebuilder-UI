import { RegisterService } from '../../../../shared/services/register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-register-otp',
  templateUrl: './register-otp.component.html',
  styleUrls: ['./register-otp.component.scss']
})
export class RegisterOtpComponent implements OnInit {
  loading: boolean = false;
  mobileNumber: string = "";
  size: number = 50;
  value1: number | undefined;
  value2: number | undefined;
  value3: number | undefined;
  value4: number | undefined;
  otpCode: string = "";
  constructor(private messageService: MessageService, private router: Router, private otpService: RegisterService) { }

  ngOnInit(): void {
    if (history.state.mobile == null) {
      this.router.navigate(['/register']);
    }
    else {
      this.mobileNumber = history.state.mobile
    }
  }
  validateOtp() {
    if ((this.value1 != null || this.value1 != undefined) && (this.value2 != null || this.value2 != undefined) &&
      (this.value3 != null || this.value3 != undefined) && (this.value4 != null || this.value4 != undefined)) {
      this.otpCode = this.value1.toString() + this.value2.toString() + this.value3.toString() + this.value4.toString();
      this.otpService.checkOTP({ UserName: this.mobileNumber, OTPCode: this.otpCode, CountryId: "1448983B-0C38-450A-BD71-9204D181B925" })
        .subscribe({
          next: (res: any) => {
            this.loading = false;
            if (!res.success){
            this.messageService.add({ severity: 'error', summary: 'Fetch Error', detail: "Invalid Otp" });
            }else{
              this.router.navigateByUrl('/register/register-reset-password', { state: { mobile: this.mobileNumber, otp: this.otpCode } });
            }
          },
          error: (err: any) => {
            this.loading = false;
            this.messageService.add({ severity: 'error', summary: 'Fetch Error', detail: err.message });
          }
        })
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Fetch Error', detail: "Mobile Required" });
    }
  }
}
