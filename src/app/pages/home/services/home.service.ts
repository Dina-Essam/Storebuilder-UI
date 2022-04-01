import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.apiEndPoint}`;
  }

  getSectionMapping(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Tenant/ShowRoomConfiguration/GetTenantShowRoomConfiguration`);
  }

  getMainSliders(params : any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Tenant/MainBanner/GetAllMainBanner`, { params });
  }
  getBanners(id : any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Tenant/Banner/GetBannerById/${id}`);
  }
  
}
