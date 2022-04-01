import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MessageService} from 'primeng/api';
import {Product} from "../../../../interfaces/product";
import {ProductService} from "../../../../shared/services/product.service";
import {Currency} from "../../../../interfaces/global";
import {StoreService} from "../../../../shared/services/store.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit, AfterViewInit {
  relatedProducts: Array<Product> = []
  currency: Currency = {} as Currency
  productDetails: Product = {} as Product;
  productId: number;
  showPanel: boolean = false

  constructor(
    private store: StoreService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private messageService: MessageService
  ) {
    this.productId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadData()
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent() {
    const sectionDetails = document.querySelector('#details');
    const relatedProductsSection = document.querySelector('#relatedProducts');
    const fromTop = sectionDetails ? sectionDetails.getBoundingClientRect().top < -110 : false;
    const fromBottom = relatedProductsSection ? relatedProductsSection.getBoundingClientRect().top < 550 : false;
    this.showPanel = fromTop && !fromBottom
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // Listen To Store Service For any change on Currency
      this.store.subscription('currency')
        .subscribe({
          next: (res) => this.currency = res
        });
    }, 10);
  }

  loadData(): void {
    this.store.set("loading",true);

    console.log(this.productId)
    this.productService.getProductDetails(this.productId)
      .subscribe({
        next: (res: any) => {

          console.log(res);
          this.productDetails = res.data;
          // this.relatedProducts = res.data.related_products;
          this.store.set("loading",false);

        },
        error: (err: any) => {
          console.error(err);
          this.messageService.add({severity: 'error', summary: 'Fetch Error', detail: err.message});
          this.store.set("loading",false);

        },
        complete: () => console.log('ProductDetails complete')
      })
  }
}
