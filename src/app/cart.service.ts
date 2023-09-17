import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './data/data';

interface ICartProduct {
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
    const updatedCart = [...currentCart, ...newItems];

    // TODO: handle if product is in cart already?

    this.cartSubject.next(updatedCart);
  }
}
