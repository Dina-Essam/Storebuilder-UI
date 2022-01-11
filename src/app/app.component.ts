import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Title} from "@angular/platform-browser";
import {StoreService} from "./shared/services/store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'momo-market';
  lang: string = 'en'
  storeNames: Array<any> = [];
  display: boolean = true;
  constructor(
    private store: StoreService,
    private translate: TranslateService,
    private appTitle: Title,
  ) {
    translate.addLangs(['en', 'ar']);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    appTitle.setTitle(this.title);

  }

  ngOnInit(): void {
    this.createStores()
    this.lang = this.store.get('lang') || 'en';
    this.setLangSettings();
  }

  createStores(): void {
    this.storeNames = [
      {name: 'lang', data: this.lang ? this.lang : 'en', localStore: true},
      {name: 'authToken', data: null, localStore: true},
      {name: 'mainData', data: null, localStore: false},
      {name: 'profile', data: null, localStore: true},
      {name: 'categories', data: null, localStore: false},
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
}
