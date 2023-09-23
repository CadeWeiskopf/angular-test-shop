import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsWrapperComponent } from './products-wrapper/products-wrapper.component';
import { UtilPipesModule } from '../util-pipes/util-pipes.module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductDetailComponent,
    ProductsWrapperComponent,
  ],
  imports: [CommonModule, UtilPipesModule, RouterLink],
  exports: [ProductsWrapperComponent],
})
export class ProductModule {}
