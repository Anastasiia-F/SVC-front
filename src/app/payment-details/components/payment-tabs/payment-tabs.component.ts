import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-tabs',
  templateUrl: './payment-tabs.component.html',
  styleUrls: ['./payment-tabs.component.scss']
})
export class PaymentTabsComponent implements OnInit {

  paymentMethod: string;

  constructor() { }

  ngOnInit() {
    this.paymentMethod = 'card';
  }

}
