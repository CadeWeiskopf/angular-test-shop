import { Component, Input } from '@angular/core';
import { IProduct } from '../data/server-requests';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: IProduct;

  constructor(private toastService: ToastService) {}

  newToast() {
    this.toastService.addToast('Test');
  }
}
