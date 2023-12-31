import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { IProduct } from 'src/app/data/server-requests';
import { ToastService } from 'src/app/toast/toast.service';

@Component({
  selector: 'app-product-add-to-cart',
  templateUrl: './product-add-to-cart.component.html',
  styleUrls: ['./product-add-to-cart.component.css'],
})
export class ProductAddToCartComponent {
  @Input({ required: true }) product: IProduct | undefined;

  quantity!: number;

  constructor(
    private cartService: CartService,
    private toastService: ToastService
  ) {}

  addToCart(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    if (!form.reportValidity()) {
      return;
    }

    if (!this.product) {
      throw Error('No product set for add to cart');
    }

    this.cartService.updateCart([
      { product: this.product, quantity: this.quantity },
    ]);

    this.toastService.addToast(
      `Added ${this.quantity} x ${this.product.name} to your cart.`
    );
  }
}
