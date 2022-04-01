import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Title} from "@angular/platform-browser";
import {StoreService} from "./shared/services/store.service";
import {MainDataService} from "./shared/services/main-data.service";
import {CartService} from "./shared/services/cart.service";
import {MessageService} from 'primeng/api';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [MessageService]
})
export class AppComponent {
  title: string = 'momo-market';
  lang: string = 'en'
  storeNames: Array<any> = [];
  display: boolean = true;
  loading: boolean = false;
  constructor(
    private store: StoreService,
    private cartService: CartService,
    private messageService: MessageService,

    private mainDataService: MainDataService,
    private translate: TranslateService,
    private appTitle: Title,
    private router: Router
  ) {
    translate.addLangs(['en', 'ar']);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    appTitle.setTitle(this.title);

  }

  ngOnInit(): void {
    this.routeToTop();
    this.createStores();
    this.lang = this.store.get('lang') || 'en';
    this.setLangSettings();
    this.getMainData();
    this.getCategories();

     this.getCart();
     this.store.subscription('loading')
        .subscribe({
          next: (res: any) => {
            this.loading = res;
            }
        });
  }

  routeToTop(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  createStores(): void {
    this.storeNames = [
      {name: 'lang', data: this.lang ? this.lang : 'en', localStore: true},
      {name: 'authToken', data: null, localStore: true},
      {name: 'timeInterval', data: null, localStore: true},
      {name: 'orderData', data: null, localStore: true},
      {name: 'transactionData', data: null, localStore: true},
      {name: 'userPhone', data: null, localStore: true},
      {name: 'mainData', data: null, localStore: true},
      {name: 'shipmentCost', data: null, localStore: true},

      {name: 'currency', data: null, localStore: true},
      {name: 'countryCode', data: null, localStore: true},
      {name: 'countryPhone', data: null, localStore: true},
      {name: 'profile', data: null, localStore: true},
      {name: 'categories', data: [], localStore: true},
      {name: 'notifications', data: null, localStore: false},
      {name: 'cartProducts', data: [], localStore: true},
      {name: 'favouritesProducts', data: [], localStore: true},
      {name: 'compareProducts', data: [], localStore: true},
      {name: 'cartProductSuccess', data: null, localStore: false},
      {name: 'favouritesProductSuccess', data: null, localStore: false},
      {name: 'compareProductSuccess', data: null, localStore: false},
      {
        name: 'checkoutData',
        data: {
          shipping: null,
          payment: null,
          promo: null,
          steps: null,
          profile: null,
          orderId: null
        },
        localStore: true
      },
      {name: 'search', data: '', localStore: false},
      {name: 'loading', data: false, localStore: true},
    ];

    /*Create Dynamic BehaviorSubject at Store*/
    this.storeNames.forEach(item => {
      this.store.createNewStore(item.name, item.data, item.localStore);
    });
  }

  setLangSettings(): void {
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
    document.documentElement.setAttribute('dir', this.lang === 'en' ? 'ltr' : 'rtl');
  }


  getCart(): void {

 var sessionId=localStorage.getItem('sessionId')||'';

    this.cartService.getCart(sessionId)
      .subscribe({
        next: (res: any) => {
          if(res.data.records[0]!=undefined){
          this.store.set('cartProducts', res.data.records[0].cartDetails)
          console.log(res.data);
          }
        },
        error: (err: any) => {

          console.error(err);
          this.messageService.add({severity:'error', summary: 'Fetch Error', detail: err.message});
        },
        complete: () => console.log('cartProducts complete')
      });
  }

  getMainData(): void {

    this.mainDataService.getInitialData()
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.store.set('mainData', res.data.records);
          console.log("mainData");
          // Dynamic Style
          const dynamicStyle = res.data.records[3].displayName;
          const dynamicStyleJson = JSON.parse(dynamicStyle);
          const dynamicStyleObj = JSON.parse(dynamicStyleJson);
          console.log(dynamicStyleObj.second_bg_color);
          // ////////////////////////////////////////////////////
        },
        error: (err: any) => {
          console.error(err);
          this.messageService.add({severity:'error', summary: 'Fetch Error', detail: err.message});
        },
        complete: () => console.log('MainData complete')
      });
  }
  getCategories(): void {

    this.mainDataService.getAllCategories()
      .subscribe({
        next: (res: any) => {
          this.store.set('categories', res.data.records)
        },
        error: (err: any) => {
          console.error(err);
          this.messageService.add({severity:'error', summary: 'Fetch Error', detail: err.message});
        },
        complete: () => console.log('Categories complete')
      });
  }
}
