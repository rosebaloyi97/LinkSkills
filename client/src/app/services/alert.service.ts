import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  // Inject toastr notification.
  constructor (private toastr: ToastrService) { }

  // method that returns a success toastr.
  public success (message: string): void {
    this.toastr.success(message);
  }

  // method that returns an error toastr.
  public error (message: string): void {
    this.toastr.error(message);
  }
}
