import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.apiEndPoint}/Tenant/Shop`;
  }

  getShopById(shopId:any): Observable<object> {
    return this.http.get(`${this.baseUrl}/GetShopById/${shopId}`);
  }

  
}
