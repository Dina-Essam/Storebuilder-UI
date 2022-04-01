import { RegisterService } from '../../../../shared/services/register.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  loading: boolean = false;
  phoneNumber: string | undefined;

  constructor(private otpService: RegisterService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
  }

  checkMobileExist() {
    if (this.phoneNumber != null && this.phoneNumber != undefined && this.phoneNumber != "") {
      this.otpService.checkMobileNumber({ UserName: this.phoneNumber, CountryId: "1448983B-0C38-450A-BD71-9204D181B925" })
        .subscribe({
          next: (res: any) => {
              this.loading = false;
              if (res.success){
              this.router.navigateByUrl('/register/register-otp', { state: { mobile: this.phoneNumber } });
            }
            else{
              this.messageService.add({ severity: 'error', summary: 'Fetch Error', detail: res.Message });
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
