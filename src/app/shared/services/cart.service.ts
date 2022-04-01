import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.apiEndPoint}/Product/Cart`;
  }

  getCart(sessionId: string): Observable<object> {
     var url=`${this.baseUrl}/GetAllCart`;
     if(sessionId!=''){
       url+='?SessionId='+sessionId;
     }
        return this.http.get(url);
  }

  addToCart(data: any): Observable<object> {

    return this.http.post(`${this.baseUrl}/CreateCart`, data);
  }

  emptyCart(cartId:any): Observable<object> {
    return this.http.get(`${this.baseUrl}/DeleteCart/${cartId}`);
  }

  removeItemFromCart(productId: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/cart/remove-item/${productId}`);
  }

  updateCart(data: any): Observable<object> {
    return this.http.post(`${this.baseUrl}/UpdateCart`, data);
  }
}
