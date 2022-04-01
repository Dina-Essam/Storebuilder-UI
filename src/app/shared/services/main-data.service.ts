import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainDataService {
  baseUrl: string;
  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.apiEndPoint}`;
    // this.baseUrl = `https://mtn.mtngrow.com/api/front-shop`;

  }
  getAllCategories(): Observable<object> {
    return this.http.get(`${this.baseUrl}/Product/Category/GetAllCategory`);
  }

  getInitialData(): Observable<object> {
    return this.http.get(`${this.baseUrl}/Tenant/ThemeKeyConfiguration/GetAllThemeKeyConfiguration`);
  }
}
