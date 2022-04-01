import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.apiEndPoint}/api/front-shop`;
  }

  getProductReviews(id: number, params: any): Observable<object> {
    return this.http.get(`${this.baseUrl}/review/showReviews/${id}`, {params});
  }
}
