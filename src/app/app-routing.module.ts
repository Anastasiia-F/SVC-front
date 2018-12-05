import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

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
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'main',
    canActivate: [AuthGuard],
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
