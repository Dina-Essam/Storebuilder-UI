export class contactInfo {
  fullName: string="";
  phoneNumber: string="";
  countryCode: string="";
  email: string="";
  gender: string="";
  description:string="";
  addressLatLng:string="";
  addressLabel: string="";
   city: string="cairo";
  building: string="";
  plotNumber: string="";

}
export class requestDelivery {
  action:string="";
  countryCode:string="";
      vehicleType:string="DELIVERY_BIKE";
      paymentMode:string="MOBILE_WALLET";
      pickupContactInfo:contactInfo=new contactInfo();
      dropOffContactInfo:contactInfo=new contactInfo();

}
export class priceEstimation {
  action:string="";
  countryCode:string="";
      vehicleType:string="DELIVERY_BIKE";
      origin:string="";
      destination:string="";

}