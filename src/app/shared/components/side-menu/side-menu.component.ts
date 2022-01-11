import {Component, Input, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  display: boolean = false;
  lang: string;

  constructor(
    private primengConfig: PrimeNGConfig,
    private store: StoreService
  ) {
    this.lang = this.store.get('lang') || 'en'
  }

  @Input('showTitle')
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.getLanguage()
  }

  openMenu() {
    this.display = true
  }

  getLanguage(): void {
    this.store.subscription('lang')
      .subscribe((res: any) => {
          this.lang = res;
      });
  }
}
