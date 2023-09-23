import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastNotificationWrapperComponent } from './toast-notification-wrapper.component';

describe('ToastNotificationWrapperComponent', () => {
  let component: ToastNotificationWrapperComponent;
  let fixture: ComponentFixture<ToastNotificationWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastNotificationWrapperComponent]
    });
    fixture = TestBed.createComponent(ToastNotificationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
