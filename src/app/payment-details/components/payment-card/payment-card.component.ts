import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  paymentForm: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.paymentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      receiveInfo: new FormControl(false),
      agreePolicies: new FormControl(false)
    });
  }

  onPaymentSubmit() {
    this.submitted = true;
    console.log('submitted');
  }

  get name() {
    return this.paymentForm.get('name');
  }

  get phone() {
    return this.paymentForm.get('phone');
  }

  get cardNumber() {
    return this.paymentForm.get('cardNumber');
  }

  get email() {
    return this.paymentForm.get('email');
  }

}
