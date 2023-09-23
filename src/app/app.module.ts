import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ProductModule } from './product/product.module';
import { ToastModule } from './toast/toast.module';
import { UtilPipesModule } from './util-pipes/util-pipes.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, CartDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    ToastModule,
    UtilPipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
