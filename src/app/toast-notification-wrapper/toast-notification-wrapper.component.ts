import { Component } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast-notification-wrapper',
  templateUrl: './toast-notification-wrapper.component.html',
  styleUrls: ['./toast-notification-wrapper.component.css'],
})
export class ToastNotificationWrapperComponent {
  constructor(private toastService: ToastService) {}

  getToastService() {
    return this.toastService;
  }
}
