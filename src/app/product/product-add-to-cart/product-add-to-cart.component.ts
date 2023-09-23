import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { IProduct } from 'src/app/data/server-requests';

@Component({
  selector: 'app-product-add-to-cart',
  templateUrl: './product-add-to-cart.component.html',
  styleUrls: ['./product-add-to-cart.component.css'],
})
export class ProductAddToCartComponent {
  @Input({ required: true }) product: IProduct | undefined;

  quantity!: number;

  constructor(private cartService: CartService) {}

  addToCart(event: Event) {
    event.preventDefault();

    if (!this.product) {
      throw Error('No product set for add to cart');
    }

    this.cartService.updateCart([
      { product: this.product, quantity: this.quantity },
    ]);
  }
}
