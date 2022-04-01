import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../shared/services/store.service";
import {AuthService} from "../../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  phoneNumber: string = '';
  password: string = '';
  submitted:boolean=false;
  constructor(
    private store: StoreService,
    private auth: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.store.set("loading",true);
    this.submitted = true;
    this.auth.login({
      username: this.phoneNumber.replace('-',''),
      password: this.password
    })
      .subscribe({
        next: (res: any) => {
          if(res.success)
          {
            console.log(res.data);
          this.store.set('profile', res.data);
          var phoneNumber=res.data.name.split('_').pop();
          this.store.set('userPhone',phoneNumber);
          this.store.set('timeInterval',new Date().getTime());
          this.store.set('authToken',res.data.authToken.replace('bearer ',''));
          this.store.set("loading",false);

          this.router.navigate(['/']);
          this.messageService.add({severity:'success', summary: 'Login', detail: 'Logged In Successfully'});
          }
          else{
            this.store.set('profile', '');
            this.store.set('authToken',  '');
            this.store.set("loading",false);

            this.messageService.add({severity:'error', summary: 'Fetch Error'});
          }
        },
        error: (err: any) => {
          console.log(err);
          this.store.set('profile', '');
          this.store.set('authToken',  '');
          this.store.set("loading",false);

          this.messageService.add({severity:'error', summary: 'Fetch Error', detail: err.message});
        }
      })
  }
}
