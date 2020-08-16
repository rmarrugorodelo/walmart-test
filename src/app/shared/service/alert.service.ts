import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {
  }

  public showSuccessMessage(message: string, title?: string) {
    return this.showMessage(message, title, 'success');
  }

  public showWarningMessage(message: string, title?: string) {
    return this.showMessage(message, title, 'warning');
  }

  public showErrorMessage(message: string, title?: string) {
    return this.showMessage(message, title, 'error');
  }

  private showMessage(message: string, title: string, messageType: SweetAlertIcon) {
    return Swal.fire(title, message, messageType);
  }
}
