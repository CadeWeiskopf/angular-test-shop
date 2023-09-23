import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { ToastNotificationWrapperComponent } from './toast-notification-wrapper/toast-notification-wrapper.component';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';

@NgModule({
  declarations: [ToastNotificationComponent, ToastNotificationWrapperComponent],
  providers: [ToastService],
  imports: [CommonModule],
  exports: [ToastNotificationWrapperComponent],
})
export class ToastModule {}
