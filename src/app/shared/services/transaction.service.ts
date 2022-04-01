import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.apiEndPoint}/Payment/Transaction`;
  }

  createTransaction(data: any): Observable<object> {
    return this.http.post(`${this.baseUrl}/CreateTransaction`, data);
  }

  
}
