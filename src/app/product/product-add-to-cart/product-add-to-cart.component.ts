import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { IProduct } from 'src/app/data/server-requests';

@Component({
  selector: 'app-product-add-to-cart',
  templateUrl: './product-add-to-cart.component.html',
  styleUrls: ['./product-add-to-cart.component.css'],
})
export class ProductAddToCartComponent {
  @Input() product!: IProduct;

  quantity!: number;

  constructor(private cartService: CartService) {}

  addToCart(event: Event) {
    event.preventDefault();

    this.cartService.updateCart([
      { product: this.product, quantity: this.quantity },
    ]);
  }
}
