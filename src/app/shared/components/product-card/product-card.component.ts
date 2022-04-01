import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../../interfaces/product";
import {Currency} from "../../../interfaces/global";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  baseUrl: string;

  @Input() product: Product = {} as Product;
  @Input() currency: Currency = {} as Currency;

  constructor(
    private router: Router
  ) {
    this.baseUrl = environment.apiEndPoint + "/";

  }

  ngOnInit(): void {
  }

  productDetails(): void {
    this.router.navigate(['product', this.product.specsProductId])
  }
}
