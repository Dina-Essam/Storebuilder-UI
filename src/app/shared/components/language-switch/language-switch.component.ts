import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../services/language.service";
import {TranslateService} from "@ngx-translate/core";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss']
})
export class LanguageSwitchComponent implements OnInit {

  direction: any;
  lang: any = 'En';

  constructor(
    private languageService: LanguageService,
    private translate: TranslateService,
    private store: StoreService,
  ) {
  }

  ngOnInit(): void {
    this.lang = this.store.get('lang');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // Listen To Store Service For any change on Language
      this.store.subscription('lang')
        .subscribe((res: any) => {
          if (res) {
            this.lang = res;
            this.setLangSettings(this.lang);
          }
        });
    }, 10);
  }

  changeLang(lang: string): void {
    this.lang = (lang === 'en') ? 'ar' : 'en';
    this.store.set('lang', this.lang)
  }

  setLangSettings(lang: string): void {
    this.direction = (lang === 'en') ? 'ltr' : 'rtl';
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    document.documentElement.setAttribute('dir', this.direction);
    document.documentElement.classList.value = this.lang === 'ar' ? 'rtl' : 'ltr'
  }
}
