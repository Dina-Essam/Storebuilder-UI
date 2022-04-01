import {Routes} from "@angular/router";
import {IndexComponent} from "./components/index/index.component";
import {OrderPlacedComponent} from "./components/order-placed/order-placed.component";

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'success', component: OrderPlacedComponent },
];
