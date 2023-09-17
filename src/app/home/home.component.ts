import { Component, OnInit } from '@angular/core';
import { IProduct, getProducts } from '../data/server-requests';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];

  ngOnInit(): void {
    const setProducts = async () => {
      this.products = await getProducts();
    };
    setProducts();
  }
}
