import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string;
  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.apiEndPoint}/Product`;
  }

  getCategoryProducts(categoryId: number,topNumber:number): Observable<object> {
    return this.http.get(`${this.baseUrl}/CategoryProduct/GetCategoryProductsByCategoryId/${categoryId}/${topNumber}`);
  }

  getProductDetails(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/Product/ProductDetails/${id}`);
  }
  getProducts(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/Product/GetProductById/productId=${id}`);
  }

  FilterWithProductName(name : any): Observable<any> {
    return this.http.get(`${this.baseUrl}/Product/FilterProduct/${name}`);
  }
}
