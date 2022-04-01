import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { StoreService } from "../shared/services/store.service";
import { isPlatformBrowser } from "@angular/common";
import { Router } from "@angular/router";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  headers: any;
  userToken: string = '';
  guestToken: string;
  clonedRequest: any;
  timeInterval: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private store: StoreService,
    private router: Router
  ) {
    this.guestToken = '';
    this.headers = {
      authorization: ' ',
      token: '',
      lang: '',
      currency: '',
      accept: 'application/json',
      contentType: 'application/json',
      allowOrigin: '*',
      allowHeaders: 'Cookie, Cache-Control, Host, User-Agent, Accept, token, Authorization, currency, lang, origin, x-requested-with, content-type, Accept-Encoding',
      allowMethods: 'PUT, GET, POST, DELETE, PATCH, OPTIONS'
    };
    this.getTimeInterval();

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var NowTime = new Date().getTime();
    console.log(this.store.get('timeInterval') + 15 * 60000, "ewfrhiewufh", NowTime)
    if (NowTime < this.store.get('timeInterval') + 15 * 60000)
      this.userToken = this.store.get('authToken') || localStorage.getItem('authToken') || this.guestToken;
    else
      this.userToken = this.guestToken;
    this.headers.Authorization = (this.userToken == '') ? '' : `Bearer ${this.userToken}`;

    if (this.guestToken != '') {
      this.headers.token = this.guestToken;
    }
    this.headers.lang = this.store.get('lang') || localStorage.getItem('lang');
    this.headers.currency = 'UGX'
    this.clonedRequest = request.clone({
      // withCredentials: true,
      headers: request.headers
        .set('Authorization', this.headers.Authorization)
        .set('token', this.headers.token)
        .set('lang', this.headers.lang)
        .set('currency', this.headers.currency)
        .set('Accept', this.headers.accept)
        .set('Content-Type', this.headers.contentType)
      // .set('Access-Control-Allow-Origin', this.headers.allowOrigin)
      // .set('Access-Control-Allow-Headers', this.headers.allowHeaders)
      // .set('Access-Control-Allow-Methods', this.headers.allowMethods)
      // .set("Access-Control-Allow-Credentials", 'true')
    });

    if (isPlatformBrowser(this.platformId)) {
    } else { }

    return next.handle(this.clonedRequest).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // if (event.body.code === 401 || event.status === 401) {
          // this.signOut();
          // }
        }
        return event;
      })
    );
  }

  signOut(): void {
    this.setStoreData();
    this.router.navigate(['']);
  }
  getTimeInterval(): void {
    if (this.store.get('timeInterval')) {
      this.store.subscription('timeInterval')
        .subscribe({
          next: (res: Date) => {
            if (res) {
              this.timeInterval = res;
            }
          },
          error: (err: any) => {
            console.error(err);
          }
        });
    }
  }
  setStoreData(): void {
    if (this.store.localStoreNames.length) {
      this.store.set('authToken', null);
      this.store.set('profile', null);
      this.store.set('cartProducts', []);
      this.store.set('favouritesProducts', []);
      this.store.set('compareProducts', []);
      this.store.set('socialAccount', null);
      this.store.set('notifications', {
        notifications: [],
        unreadNotifications: 0
      });
      this.store.set('checkoutData', {
        shipping: null,
        payment: null,
        promo: null,
        steps: null,
        profile: null,
        orderId: null
      });
    } else {
      localStorage.setItem('authToken', '');
      localStorage.setItem('timeInterval', '');
      localStorage.setItem('userPhone', '');
      localStorage.setItem('profile', '');
      localStorage.setItem('cartProducts', JSON.stringify([]));
      localStorage.setItem('favouritesProducts', JSON.stringify([]));
      localStorage.setItem('compareProducts', JSON.stringify([]));
    }
  }
}
