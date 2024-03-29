import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user';
import { Credit } from '../../../core/models/credit';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  @Input()
  plan: string;

  @Input()
  price: number;

  @Input()
  vrm: string;

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
      creditCard: new FormControl('', [Validators.required]),
      email: new FormControl('', []),
      receiveInfo: new FormControl(false),
      agreePolicies: new FormControl(false),
      date: new FormControl(false),
      cvc: new FormControl(false)
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
        registration: this.vrm
    };

    user.credits = [];

    if (this.plan !== 'Multicheck') {
      user.credits.push(credit);
    }
    else {
      for (let i of [0, 1, 2]) {
        if(i>0){
          credit.registration = '';
        }
        user.credits.push(credit);
      }
    }

    this.auth.signUp(user)
        .subscribe(res => {
          this.router.navigate(['auth', 'set-password']);
        });

    // this.router.navigate(['thank-you']);
  }

  get name() {
    return this.paymentForm.get('name');
  }

  get creditCard() {
    return this.paymentForm.get('creditCard');
  }

  get email() {
    return this.paymentForm.get('email');
  }

  get date() {
    return this.paymentForm.get('date');
  }

  get cvc() {
    return this.paymentForm.get('cvc');
  }

}
