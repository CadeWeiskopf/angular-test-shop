import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  toasts: { id: number; message: string }[] = [];

  addToast(message: string) {
    this.toasts.push({ id: new Date().getTime(), message });
  }

  removeToast(id: number) {
    console.log('removetoast', id);
    const toastIndex = this.toasts.findIndex((toast) => {
      return toast.id === id;
    });
    this.toasts.splice(toastIndex, 1);
  }
}
