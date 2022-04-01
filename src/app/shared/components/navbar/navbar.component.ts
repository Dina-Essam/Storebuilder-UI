import {AfterViewInit, Component, OnInit} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {Category} from "../../../interfaces/category";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  categories: Array<Category> = [];

  constructor(
    private store: StoreService
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // Listen To Store Service For any change on categories
      this.store.subscription('categories')
        .subscribe({
          next: (res: any) => {
            this.categories = res
            console.log(this.categories, " 4",res)

          },
          error: (err: any) => {
            console.error(err);
          }
        });
    }, 1)
  }

}
