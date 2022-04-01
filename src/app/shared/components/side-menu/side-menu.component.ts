import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {StoreService} from "../../services/store.service";
import {Category} from "../../../interfaces/category";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, AfterViewInit {
  display: boolean = false;
  categories: Array<Category> = [];
  lang: string;

  constructor(
    private primengConfig: PrimeNGConfig,
    private store: StoreService
  ) {
    this.lang = this.store.get('lang') || 'en'
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.getLanguage()
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // Listen To Store Service For any change on categories
      this.store.subscription('categories')
        .subscribe({
          next: (res: any) => {
            this.categories = res
            console.log(this.categories, " 5",res)

          },
          error: (err: any) => {
            console.error(err);
          }
        });
    }, 1)
  }


  openMenu() {
    this.display = true
  }

  closeMenu(): void {
    this.display = false
  }

  getLanguage(): void {
    this.store.subscription('lang')
      .subscribe((res: any) => {
        this.lang = res;
      });
  }
}
