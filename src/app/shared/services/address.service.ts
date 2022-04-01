import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.apiEndPoint}/api/front-shop`;
  }

  getAddress(): Observable<object> {
    return this.http.get(`${this.baseUrl}/addresses`);
  }

  addAddress(data: any): Observable<object> {
    return this.http.post(`${this.baseUrl}/addresses/create`, data);
  }

  deleteAddress(id: number): Observable<object> {
    return this.http.delete(`${this.baseUrl}/addresses/${id}`);
  }

  updateAddress(data: any,id: number): Observable<object> {
    return this.http.put(`${this.baseUrl}/addresses/${id}`, data);
  }
}
