import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../shared/services/product.service";
import { Currency } from 'src/app/interfaces/global';
import { Product } from 'src/app/interfaces/product';
import { StoreService } from 'src/app/shared/services/store.service';
import { Category } from 'src/app/interfaces/category';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-category-products',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  categoryId: any;
  category!: Category;
  items: MenuItem[] = [];
  home: MenuItem = {icon: 'pi pi-home', routerLink: '/'};
  currency: Currency = {} as Currency;
  baseUrl:string=environment.apiEndPoint+'/';
  @Input() products: Array<Product> | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private store: StoreService,
  ) {
      this.activatedRoute.paramMap.subscribe(params => {
        this.products =[];
        this.categoryId = params.get('id');
        this.loadData();
     })
    }

  ngOnInit(): void {

  }

  loadData(): void {
    this.store.set("loading",true);
    this.productService.getCategoryProducts(this.categoryId,this.categoryId)
      .subscribe({
        next: (res: any) => {
        this.products = res.data;
          this.store.set("loading",false);
        },
        error: (err: any) => {
        console.error(err);
          this.store.set("loading",false);
        }
      });
      setTimeout(() => {
        // Listen To Store Service For any change on Currency
        this.store.subscription('currency')
          .subscribe({
            next: (res)=> this.currency = res
          });
      }, 10);
      this.store.subscription('categories')
      .subscribe({
        next: (res: any) => {
          res.forEach((element: Category) => {
            if(element.id == this.categoryId){
              this.category = element;
            }
          });
        },
        error: (err: any) => {
          console.error(err);
        }
      });
      this.items = [
        {label: this.category.categoryName},
        {label: 'Products'},
      ];
      this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}
