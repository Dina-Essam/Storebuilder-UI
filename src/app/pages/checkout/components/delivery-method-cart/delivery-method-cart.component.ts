import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-delivery-method-cart',
  templateUrl: './delivery-method-cart.component.html',
  styleUrls: ['./delivery-method-cart.component.scss']
})
export class DeliveryMethodCartComponent implements OnInit {

  selectedDeliveryMethod: any = null;

  methods: any[] = [{name: 'Delivery', key: 'D'}, {name: 'MTN Pickup Boxes', key: 'M'}];

  cities: any[];

  selectedCityCode:  any = null;

  areas: any[];

  selectedAreaCode:  any = null;

  locations: any[];

  selectedLocationCode:  any = null;

  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
    // this.selectedCityCode = this.cities[0].code;
    this.areas = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
    // this.selectedAreaCode = this.areas[0].code;
    this.locations = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
    // this.selectedLocationCode = this.locations[0].code;
  }

  ngOnInit() {
    this.selectedDeliveryMethod = this.methods[1];
  }

}
