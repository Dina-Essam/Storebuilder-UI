import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.apiEndPoint}/Order/Order`;
  }

  getAllOrders(): Observable<object> {
    return this.http.get(`${this.baseUrl}/GetAllOrder`);
  }
  getOrder(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/GetOrderById?OrderId=${id}`);
  }
createOrder(data: any): Observable<object> {
  return this.http.post(`${this.baseUrl}/CreateOrder`, data);
}
updateOrder(data: any): Observable<object> {
  return this.http.post(`${this.baseUrl}/UpdateOrder`, data);
}
}
