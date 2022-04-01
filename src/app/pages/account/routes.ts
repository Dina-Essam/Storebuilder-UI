import {Routes} from "@angular/router";
import {IndexComponent} from "./components/index/index.component";
import {AddressComponent} from "./components/address/address.component";
export const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'address', component: AddressComponent},
];
