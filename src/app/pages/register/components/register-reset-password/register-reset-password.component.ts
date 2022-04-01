import { RegisterService } from '../../../../shared/services/register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-register-reset-password',
  templateUrl: './register-reset-password.component.html',
  styleUrls: ['./register-reset-password.component.scss']
})
export class RegisterResetPasswordComponent implements OnInit {
  loading: boolean = false;
  password: string = "";
  mobileNumber: string = "";
  otpCode: string = "";
  constructor(private messageService: MessageService, private router: Router, private otpService: RegisterService) { }
  displayApprovedModal: boolean = false;
  ngOnInit(): void {
    this.mobileNumber = history.state.mobile
    this.otpCode = history.state.otp
  }
  approveModal() {
    this.displayApprovedModal = true;
  }
  submit() {
    if ((this.mobileNumber != null || this.mobileNumber != undefined) && (this.password != null || this.password != undefined)) {
      this.otpService.registerUser({ UserName: this.mobileNumber, Password: this.password, RoleType: 2, OTPCode: this.otpCode })
        .subscribe({
          next: (res: any) => {
            this.loading = false;
            this.router.navigate(['/login']);
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
