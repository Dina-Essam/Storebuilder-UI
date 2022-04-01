import { Component, OnInit } from '@angular/core';
import { priceEstimation } from 'src/app/interfaces/shipment';
import { ShipmentService } from 'src/app/shared/services/shipment.service';
import { ShopService } from 'src/app/shared/services/shop.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-order-summary-cart',
  templateUrl: './order-summary-cart.component.html',
  styleUrls: ['./order-summary-cart.component.scss']
})
export class OrderSummaryCartComponent implements OnInit {

  address: string = "Church Rd, Kampala, Uganda";
  itemsTotalPrices: number = 0;
  shipmentCost: number = 0;
  countryCode: string = "";
  shopLat: any;
  shopLng: any;
  req :any;
shipmentDetails=new Array<any>();
  constructor(private store: StoreService,
    private shopService: ShopService, private shipmentService: ShipmentService) { 
         this.req = new priceEstimation();
    }

  ngOnInit(): void {
    this.getCartId();
    this.CalculateShipmentCost();

  }
  getCartId() {
    this.store.subscription('cartProducts')
      .subscribe({
        next: (res: any) => {
          if (res.length > 0) {
            res.forEach((element: { price: number; }) => {
              this.itemsTotalPrices += element.price
            });
          }
        },
        error: (err: any) => {
          console.error(err);
        }
      });
  }
  CalculateShipmentCost() {
   
    this.shipmentCost = 0;
    this.store.subscription('orderData')
      .subscribe({
        next: (res: any) => {
          console.log(res);
          if (res) {
            this.getCountryCode();
            for (var i = 0; i < res.productDetails.length; i++) {
              this.getProductShopLatLng(res.productDetails[i].ShopId);

            }


          }
        },
        error: (err: any) => {
          console.error(err);
        }
      });
  }
  getCountryCode() {
    this.store.subscription('mainData')
      .subscribe({
        next: (res: any) => {

          var data = res.find((obj: any) => obj.key.toLocaleLowerCase() === 'countrycode'.toLocaleLowerCase());
          if (data)
            this.req.countryCode = data.displayName; data = res.find((obj: any) => obj.key.toLocaleLowerCase() === 'countryphone'.toLocaleLowerCase());

        },
        error: (err: any) => {
          console.error(err);
        }
      });
  }
  EstimatedCost(shopId:any,req: any) {
    this.shipmentService.GetDeliveryPrice(req)
      .subscribe({
        next: (res: any) => {
          this.shipmentCost += res.data.cost;
          this.shipmentDetails.push({shopId:shopId,cost:res.data.cost});
          console.log(this.shipmentDetails, "price");

          this.store.set('shipmentCost',{totalDeliveryCost:this.shipmentCost.toFixed(2),shipmentDetails:this.shipmentDetails});
          console.log(this.shipmentCost, "ship")
        },
        error: (err: any) => {

        }
      })

  }
  getProductShopLatLng(shopId: any) {
    this.shopService.getShopById(shopId)
      .subscribe({
        next: (res: any) => {
          console.log(res, "shop");
          var location = [res.data.lat, res.data.lng]
          this.req.origin = "["+location.toString()+"]";
          let that=this;
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              that.req.destination = "["+[position.coords.latitude, position.coords.longitude].toString()+"]";
              this.EstimatedCost(shopId,this.req);

            });
          }

        },
        error: (err: any) => {

        }
      })
  }


}
