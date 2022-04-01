import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  baseUrl: string;
   latitude :string="";
   longitude:string="";
  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.apiEndPoint}/Shipment/YellowBirdShipment`;
  }

  
createDeliveryRequest(data: any): Observable<object> {
  return this.http.post(`${this.baseUrl}/DeliveryRequest`, data);
}
GetDeliveryPrice(data: any): Observable<object> {
  return this.http.post(`${this.baseUrl}/PriceEstimation`, data);
}
getShopLatLng(address:any)
{
  var geocoder = new google.maps.Geocoder();
let that=this;
geocoder.geocode( { 'address': address}, function(results, status) {

if (status == google.maps.GeocoderStatus.OK) {
   that.latitude = results[0].geometry.location.lat.toString();
  that.longitude = results[0].geometry.location.lng.toString();
  } 
}); 
}

}
