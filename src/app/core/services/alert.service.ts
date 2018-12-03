import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  searchedData: any;

  constructor(
    private notifier: NotifierService
  ) { }

  success(msg: string) {
    this.notifier.show({
      type: 'success',
      message: msg
    });
    setTimeout(() => this.notifier.hideAll(), 3000);
  }

  error(msg: string) {
    this.notifier.show({
      type: 'error',
      message: msg
    });
    setTimeout(() => this.notifier.hideAll(), 3000);
  }
}
