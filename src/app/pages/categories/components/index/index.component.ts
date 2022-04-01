import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../shared/services/product.service";
import { Category } from 'src/app/interfaces/category';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  items: MenuItem[] = [];
  categories: Array<Category> = [];
  home: MenuItem = {icon: 'pi pi-home', routerLink: '/'};
  categoryId: number;
  products: any[] =[];
  //
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: StoreService,
    private productService: ProductService,
  ) { this.categoryId = this.activatedRoute.snapshot.params['id'];}
  //
  //
  ngOnInit(): void {
    this.items = [
      {label: 'All Categories'}
  ];

  this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  ngAfterViewInit(): void {
    setTimeout(() => {

      // Listen To Store Service For any change on categories
      this.store.subscription('categories')
        .subscribe({
          next: (res: any) => {
            this.categories = res;
            console.log(this.categories, " 1",res)
            console.log(this.categories);
          },
          error: (err: any) => {
            console.error(err);

          }
        });
    }, 1);

  }

}
