import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {Subscription} from "rxjs";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription: Array<Subscription> = [] ;
  isActiveSearch: boolean = false;
  products: Array<any> = [];
  authToken: string = '';
  logo: string = '/Images/logo.png';
  user: any;
  baseUrl:string;
  constructor(
    private store: StoreService
  ) {
    this.baseUrl = `${environment.apiEndPoint}`;

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // Listen To Store Service For any change on Auth Users
      this.subscription[0] = this.store.subscription('authToken')
        .subscribe({
          next: (res: any) => {
            this.authToken = res;
          },
          error: (err: any) => {
            console.error(err);
          }
        });

      this.subscription[1] = this.store.subscription('profile')
        .subscribe({
          next: (res: any) => {
            this.user = res;
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      this.subscription[2] = this.store.subscription('cartProducts')
        .subscribe({
          next: (res: any) => {
            this.products = res;
          },
          error: (err: any) => {
            console.error(err);
          }
        });

      this.subscription[3] = this.store.subscription('authToken')
        .subscribe({
          next: (res: any) => {
            this.authToken = res;
          },
          error: (err: any) => {
            console.error(err);
          }
        });

      this.subscription[4] = this.store.subscription('mainData')
        .subscribe({
          next: (res: any) => {
            var data = res.find((obj:any) => obj.key === 'logo');
            if(data)
            this.logo =this.baseUrl +"/"+ (data.value|| this.logo);
          },
          error: (err: any) => {
            console.error(err);
          }
        });

    }, 1)
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => {
      sub.unsubscribe();
    })
  }

}
