import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css'],
})
export class ToastNotificationComponent implements OnInit {
  @Input({ required: true }) message!: string;
  @Output() close = new EventEmitter<void>();

  ngOnInit(): void {
    setTimeout(() => this.closeToast(), 2000);
  }

  closeToast() {
    this.close.emit();
  }
}
