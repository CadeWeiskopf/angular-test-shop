import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Pipe({ name: 'stringify' })
export class JsonStringifyPipe implements PipeTransform {
  transform(value: any): string {
    return JSON.stringify(value);
  }
}

@Pipe({ name: 'twoDecimalPlaces' })
export class TwoDecimalPlacesPipe implements PipeTransform {
  transform(value: number): string {
    return value.toFixed(2);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCardComponent,
    JsonStringifyPipe,
    TwoDecimalPlacesPipe,
    ProductDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
