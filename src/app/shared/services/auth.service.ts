import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string;
  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.apiEndPoint}/Auth/User`;
  }

  login(data: any): Observable<object> {
    return this.http.post(`${this.baseUrl}/Login`, data);
  }
}
