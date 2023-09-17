import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './data/data';

export interface ICartProduct {
  product: IProduct;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<ICartProduct[]>([]);

  cart$ = this.cartSubject.asObservable();

  updateCart(newItems: ICartProduct[]): void {
    const currentCart = this.cartSubject.value;

    // TODO: handle if product is in cart already
    newItems.forEach((item, index) => {
      const itemInCart = currentCart.find(
        (cartItem) => cartItem.product.id === item.product.id
      );
      if (itemInCart) {
        itemInCart.quantity += item.quantity;
        newItems.splice(index, index + 1);
      }
    });

    const updatedCart = [...currentCart, ...newItems];
    this.cartSubject.next(updatedCart);
  }
}
