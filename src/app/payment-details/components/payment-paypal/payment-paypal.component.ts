import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user';
import { Credit } from '../../../core/models/credit';

@Component({
  selector: 'app-payment-paypal',
  templateUrl: './payment-paypal.component.html',
  styleUrls: ['./payment-paypal.component.scss']
})
export class PaymentPaypalComponent implements OnInit {

  @Input()
  plan: string;

  paymentForm: FormGroup;
  submitted = false;

  constructor(
    private auth: AuthService,
    private notifier: NotifierService,
    private router: Router
  ) { }

  ngOnInit() {
    this.paymentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      receiveInfo: new FormControl(false),
      agreePolicies: new FormControl(false)
    });
  }

  onPaymentSubmit() {
    this.submitted = true;

    if (this.paymentForm.errors) {
      this.notifier.notify('error', 'Please correct your infos.');
      return;
    }

    if (!this.paymentForm.value['agreePolicies']) {
      this.notifier.notify('error', 'You should agree on our Terms & Conditions.');
      return;
    }

    const user: User = this.paymentForm.value;
    const credit: Credit = {
        creditType: this.plan === 'Basic Check' ? 'Basic' : 'Full',
        generateReport: true,
        hasReport: true
    };

    user.credits = [];

    if (this.plan !== 'Multicheck') {
      user.credits.push(credit);
    } else {
      for (let i of [0, 1, 2]) {
        user.credits.push(credit);
      }
    }

    this.auth.signUp(user).subscribe(res => {
      this.router.navigate(['auth', 'set-password']);
    });
  }

  get name() {
    return this.paymentForm.get('name');
  }

  get phone() {
    return this.paymentForm.get('phone');
  }

  get email() {
    return this.paymentForm.get('email');
  }

}
