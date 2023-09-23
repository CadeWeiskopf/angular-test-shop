import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product/:slug', component: ProductDetailComponent },
  { path: 'cart', component: CartDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
