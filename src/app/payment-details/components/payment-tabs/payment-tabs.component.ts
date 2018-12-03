import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-tabs',
  templateUrl: './payment-tabs.component.html',
  styleUrls: ['./payment-tabs.component.scss']
})
export class PaymentTabsComponent implements OnInit {

  @Input()
  plan: string;

  paymentMethod: string;

  constructor() { }

  ngOnInit() {
    this.paymentMethod = 'card';
  }

}
