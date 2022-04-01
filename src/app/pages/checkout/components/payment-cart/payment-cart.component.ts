import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PaymentDialogComponent } from "../payment-dialog/payment-dialog.component";
import { MessageService } from "primeng/api";
import { PaymentService } from 'src/app/shared/services/payment.service';
import { get } from "scriptjs";
import { StoreService } from 'src/app/shared/services/store.service';
import { PaymentErrorDialogComponent } from '../payment-error-dialog/payment-error-dialog.component';
import { PaymentWaitingDialogComponent } from '../payment-waiting-dialog/payment-waiting-dialog.component';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { ShipmentService } from 'src/app/shared/services/shipment.service';
import { requestDelivery } from 'src/app/interfaces/shipment';
import { ShopService } from 'src/app/shared/services/shop.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { TransactionDetailsService } from 'src/app/shared/services/transactionDetails.service';
declare const Lightbox: any;

@Component({
  selector: 'app-payment-cart',
  templateUrl: './payment-cart.component.html',
  styleUrls: ['./payment-cart.component.scss'],
  providers: [DialogService]
})
export class PaymentCartComponent implements OnInit {

  constructor(public dialogService: DialogService, private store: StoreService
    , public paymentService: PaymentService, private router: Router
    , public messageService: MessageService,private shopService:ShopService
    , private transactionService: TransactionService,private transactionDetailsService:TransactionDetailsService
    ,private orderService:OrderService
    ,private shipmentService:ShipmentService) { }

  ref: DynamicDialogRef | undefined;
  lightBoxData:any;
  shopsPayments=new Array<any>();
  lightBoxURL: any;
  userPhoneNumber: any;
  showPayButton: boolean = false;
  orderDetails: any;
  paymentResult: any;
  currency:any;
  countryCode:any;
  countryPhone:any;
  shipmentCost:any;
   requestData=new requestDelivery();
   shipmentDetails:any;

  ngOnInit(): void {
    this.store.subscription('mainData')
      .subscribe({
        next: (res: any) => {
          var data = res.find((obj: any) => obj.key.toLocaleLowerCase() === 'LightBoxURL'.toLocaleLowerCase());
          if (data)
            this.lightBoxURL = data.displayName;
             data = res.find((obj: any) => obj.key.toLocaleLowerCase() === 'currency'.toLocaleLowerCase());
             if (data)
           this.currency=data.displayName;
           data = res.find((obj: any) => obj.key.toLocaleLowerCase() === 'countryCode'.toLocaleLowerCase());
           if (data)
         this.requestData.countryCode=data.displayName;
          data = res.find((obj: any) => obj.key.toLocaleLowerCase() === 'countryphone'.toLocaleLowerCase());
         if (data)
         {
       this.requestData.dropOffContactInfo.countryCode=data.displayName;
       this.requestData.pickupContactInfo.countryCode=data.displayName;
     
         }
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    this.store.subscription('userPhone')
      .subscribe({
        next: (res: any) => {
          console.log(res);
          if (res)
          {
            this.userPhoneNumber = res;
            this.requestData.dropOffContactInfo.phoneNumber=res.toString();
          }
        },
        error: (err: any) => {
          console.error(err);
        }
      });
      this.getOrderData()
  }
  getAllPayments()
  {
    this.paymentService.getAllPayments().subscribe({
      next: (res: any) => {

        console.log("Payment", res)
        this.lightBoxData=res.data.records[0];
      //   for(var i=0;i<res.data.records.length;i++) 
      //   {
      //     if(res.data.records[i].shopId==null)
      //     {
      //       this.lightBoxData={
      //         "PaymentId":res.data.records[i].id,
      //         "MerchantId":res.data.records[i].merchantId,
      //         "TerminalId":res.data.records[i].terminalId
      //       }
      //     }
      //     else
      //     {
      //     var orderCost=this.orderDetails.productDetails.find((x: any)  => x.ShopId == res.data.records[i].shopId);
      //     var deliveryAmount=this.shipmentDetails.shipmentDetails.find((x: any)  => x.shopId == res.data.records[i].shopId)
      //     console.log("this.shipmentDetails.shipmentDetails",orderCost)
      //      if(orderCost && deliveryAmount)
      //      {
      //     var data={
      //       "PaymentId":res.data.records[i].id,
      //       "MerchantId":res.data.records[i].merchantId,
      //       "TerminalId":res.data.records[i].terminalId,
      //       "Amount":orderCost.price*orderCost.quantity,
      //       "DeliveryAmount":deliveryAmount.cost
      //     }
      //     this.shopsPayments.push(data);
      //   }
      //     console.log("ligthBox",this.lightBoxData)
      // }
      //   }
        this.showPayButton = true;
        this.CallLightBox();

      },
      error: (err: any) => {
        console.error(err);
        this.messageService.add({ severity: 'error', summary: 'Fetch Error', detail: err.message });
      },
      complete: () => console.log('Get Payments complete')
    });
  }
  getOrderData()
  {
    this.store.subscription('orderData')
    .subscribe({
      next: (res: any) => {
        console.log(res);
        if (res) {
          this.orderDetails = res;
         this.getShipmentCost();
        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
  getShipmentCost()
  {
    this.store.subscription('shipmentCost')
    .subscribe({
      next: (res: any) => {
        console.log(res);
        if (res) {
          this.shipmentCost = res.totalDeliveryCost;
        this.shipmentDetails=res;
        this.getAllPayments();
        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
  show() {
    Lightbox.Checkout.showLightbox();

  }
  CallLightBox() {
    let that = this;
    get(this.lightBoxURL, () => {

      Lightbox.Checkout.configure = {
        // momoPaySubMerchantsDataStr:this.shopsPayments,
        MID: this.lightBoxData.merchantId,
        TID: this.lightBoxData.terminalId,
        MerchantReference: this.orderDetails.orderId ?? '',
        AmountTrxn: (this.orderDetails.orderAmount+this.shipmentCost)*100,
        AdditionalCustomerData: {
          CustomerMobile: this.store.get('userPhone'),
        },

        completeCallback: function (data: any) {
          console.log('completed');

          if (data) {
            that.paymentResult = data;
            that.PaymentSuccess();


            Lightbox.Checkout.closeLightbox();


          }

        },
        errorCallback: function () {
          Lightbox.Checkout.closeLightbox();
        },
        cancelCallback: function () {
          Lightbox.Checkout.closeLightbox();

        }

      }

    });
  }

  PaymentSuccess() {
    var transactionData = {
      PaymentId: this.lightBoxData.PaymentId,
      TransactionId: this.paymentResult.SystemReference,
      CardNumber: this.paymentResult.PayerAccount
    };
    
  
    this.store.set('transactionData', transactionData);
    this.transactionService.createTransaction(transactionData)
      .subscribe({
        next: (res: any) => {
          if (res.success) {
            for(var i=0;i<this.orderDetails.productDetails.length;i++)
            {
              this.getProductShopLatLng(res.data.records.id,this.orderDetails.productDetails[i].ShopId,
                this.orderDetails.orderId,this.orderDetails.productDetails[i].productId
                ,this.orderDetails.productDetails[i].price);
            }
            this.UpdateOrder();
            this.router.navigate(['/checkout/success']);

          }
          else {

          }
        },
        error: (err: any) => {

        }
      })
  }
  getProductShopLatLng(transactionId:any,shopId: any,orderId:any,productId:any,cost:any) {
    this.shopService.getShopById(shopId)
      .subscribe({
        next: (res: any) => {
          console.log(res, "shop");
          var location = [res.data.lat, res.data.lng]
          this.requestData.pickupContactInfo.addressLatLng = "["+location.toString()+"]";
          this.CreateShipmentRequest(transactionId,res.data.id,cost,orderId,productId);

          let that=this;
          
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position=>{
        that.requestData.dropOffContactInfo.addressLatLng="["+[position.coords.latitude,position.coords.longitude].toString()+"]";

      });
    } 

        },
        error: (err: any) => {

        }
      })
  }
  CreateShipmentRequest(transactionId:any,shopId:any,totalCost:any,orderId:any,productId:any) {
    
    let data = {
      "orderId":orderId,
      "productId":productId,
      "requestData":this.requestData
    }

    this.shipmentService.createDeliveryRequest(data)
    .subscribe({
      next: (res: any) => {
        this.CreateTransactionDetails(transactionId,shopId,totalCost,res.data.cost);

        
      },
      error: (err: any) => {
       
      }
    })
  }

  UpdateOrder()
  {
    this.orderService.updateOrder({id:this.orderDetails.orderId,totalDeliveryCost:this.shipmentCost})
    .subscribe({
      next: (res: any) => {
        console.log(res,"delivery");
        
      },
      error: (err: any) => {
       
      }
    })
  }
  CreateTransactionDetails(transactionId:any,shopId:any,totalCost:any,deliveryCost:any)
  {
    this.transactionDetailsService.createTransactionDetail(
      {orderId:this.orderDetails.orderId,transactionId:transactionId,shopId:shopId,totalCost:totalCost,deliveryCost:deliveryCost})
    .subscribe({
      next: (res: any) => {
        console.log(res,"delivery");
        
      },
      error: (err: any) => {
       
      }
    })
  }
}
