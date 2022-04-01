import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

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
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/categories/categories.module').then((m) => m.CategoriesModule)
          }
        ]
      },
      {
        path: 'category/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/category-products/category-products.module').then((m) => m.CategoryProductsModule)
          }
        ]
      },
      {
        path: 'cart',
        loadChildren: () => import('./pages/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'account',
        loadChildren: () => import('./pages/account/account.module').then((m) => m.AccountModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'merchants',
        loadChildren: () => import('./pages/merchants/merchants.module').then((m) => m.MerchantsModule),
      },
      {
        path: 'orders',
        loadChildren: () => import('./pages/orders/orders.module').then((m) => m.OrdersModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'order/:id',
        loadChildren: () => import('./pages/order-details/order-details.module').then((m) => m.OrderDetailsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'order-refund',
        loadChildren: () => import('./pages/order-refund/order-refund.module').then((m) => m.OrderRefundModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/sign-in/sign-in.module').then((m) => m.SignInModule),
    
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./pages/reset-password/reset-password.module').then((m) => m.ResetPasswordModule),
      },
      {
        path: 'otp',
        loadChildren: () => import('./pages/otp/otp.module').then((m) => m.OtpModule),
      },
      {
        path: 'update-password',
        loadChildren: () => import('./pages/update-password/update-password.module').then((m) => m.UpdatePasswordModule),
      },
      {
        path: 'checkout',
        loadChildren: () => import('./pages/checkout/checkout.module').then((m) => m.CheckoutModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule),
    
      },
      { path: '**', redirectTo: '' }
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
