import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { environment } from 'src/environments/environment';

console.log(environment.apiUrl);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testangular';

  cartItemCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((cartItems) => {
      this.cartItemCount = this.cartService.getTotalLineItems(cartItems);
    });
  }
}
