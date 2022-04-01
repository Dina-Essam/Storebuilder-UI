import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddressService} from "../../../../shared/services/address.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import { StoreService } from 'src/app/shared/services/store.service';
declare const google: any;

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent  implements OnInit {
  addressForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    address1: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    postcode: new FormControl('', [Validators.required,
      Validators.minLength(5),
      Validators.minLength(7)]),
    phone: new FormControl('', Validators.required),
    geo_location : new FormControl(''),
  });
  search: string = '';
  latitude!: number;
  longitude!: number;
  zoom!: number;
  address!: string;
  private geoCoder = new google.maps.Geocoder();

  @ViewChild('search')
  public searchElementRef!: ElementRef;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private addressService: AddressService,
    private messageService:MessageService,
    private router:Router,
    private store:StoreService
  ) { }


  ngOnInit() {
    this.latitude=0.3;
    this.longitude=32.5;
    this.zoom=8;
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder();

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  markerDragEnd($event: google.maps.MouseEvent) {
    this.latitude = $event.latLng.lat();
    this.longitude = $event.latLng.lng();
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude: number, longitude: number) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results: { formatted_address: string; }[], status: string) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  clear(): void {
    this.searchElementRef.nativeElement.value='';
  }

  onSubmit() {
    this.addressForm.patchValue({
      geo_location: this.latitude.toString()+ "," +this.longitude.toString(),
    });
    this.store.set("loading",true);
    this.addressService.addAddress(this.addressForm.value)
      .subscribe({
        next: (res: any) => {
          this.store.set("loading",false);
          this.router.navigate(['/account']);
          this.messageService.add({severity:'success', summary: 'Address', detail: 'Address added Successfully'});
        },
        error: (err: any) => {
          console.log(err);
          this.store.set("loading",false);
          this.messageService.add({severity:'error', summary: 'Fetch Error', detail: err.message});
        }
      })
  }
  OnlyNumeric(val:any):boolean
  {
    if(!Number(val.value))
    {
      this.addressForm.value.postcode = '';
      this.addressForm.value.phone = '';

    }
    else{
      console.log("it is numbers");
    }
    return false;
  }

}
