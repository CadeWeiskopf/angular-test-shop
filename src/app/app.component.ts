import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testangular';

  cartItemCount: number = 0; // Initialize cartItemCount

  constructor(private cartService: CartService) {} // Inject the CartService

  ngOnInit(): void {
    this.cartService.cart$.subscribe((cartItems) => {
      this.cartItemCount = cartItems.length;
    });
  }
}
