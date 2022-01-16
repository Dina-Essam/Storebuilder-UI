import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'product/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/product-details/product-details.module').then((m) => m.ProductDetailsModule)
          }
        ]
      },
      {
        path: 'cart',
        loadChildren: () => import('./pages/cart/cart.module').then((m) => m.CartModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
