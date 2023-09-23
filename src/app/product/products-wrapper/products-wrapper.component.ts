import { Component, OnInit } from '@angular/core';
import { IProduct, getProducts } from '../../data/server-requests';

@Component({
  selector: 'app-products-wrapper',
  templateUrl: './products-wrapper.component.html',
  styleUrls: ['./products-wrapper.component.css'],
})
export class ProductsWrapperComponent implements OnInit {
  products: IProduct[] = [];

  loadingProducts = true;

  ngOnInit(): void {
    const setProducts = async () => {
      this.products = await getProducts();
    };
    setProducts();
    this.loadingProducts = false;
  }
}
