import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsWrapperComponent } from './products-wrapper/products-wrapper.component';
import { UtilPipesModule } from '../util-pipes/util-pipes.module';
import { RouterLink } from '@angular/router';
import { ProductAddToCartComponent } from './product-add-to-cart/product-add-to-cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductDetailComponent,
    ProductsWrapperComponent,
    ProductAddToCartComponent,
  ],
  imports: [CommonModule, UtilPipesModule, RouterLink, FormsModule],
  exports: [ProductsWrapperComponent],
})
export class ProductModule {}
