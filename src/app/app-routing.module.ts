import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'plans',
    loadChildren: './select-plan/select-plan.module#SelectPlanModule'
  },
  {
    path: 'payment-details',
    loadChildren: './payment-details/payment-details.module#PaymentDetailsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
