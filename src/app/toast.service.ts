import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  toasts: string[] = [];

  addToast(message: string) {
    this.toasts.push(message);
  }

  removeToast(index: number) {
    this.toasts.splice(index, 1);
  }
}
