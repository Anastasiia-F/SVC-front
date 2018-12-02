import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { PaymentDetailsDescriptionComponent } from './components/payment-details-description/payment-details-description.component';
import { PaymentTabsComponent } from './components/payment-tabs/payment-tabs.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { PaymentPaypalComponent } from './components/payment-paypal/payment-paypal.component';

const routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
    PaymentDetailsDescriptionComponent,
    PaymentTabsComponent,
    SummaryComponent,
    PaymentCardComponent,
    PaymentPaypalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PaymentDetailsModule { }
