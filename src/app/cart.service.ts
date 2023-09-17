import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './data/data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<any[]>([]);

  cart$ = this.cartSubject.asObservable();

  updateCart(newItems: { product: IProduct; quantity: number }[]): void {
    const currentCart = this.cartSubject.value;
    const updatedCart = [...currentCart, ...newItems];

    // TODO: handle if product is in cart already

    this.cartSubject.next(updatedCart);
  }
}
