import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css'],
})
export class ToastNotificationComponent {
  @Input() message!: string;
  @Output() close = new EventEmitter<void>();

  closeToast() {
    this.close.emit();
  }
}
