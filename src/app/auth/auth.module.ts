import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { VerifyComponent } from './components/verify/verify.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'set-password',
    component: SetPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'verfiy',
    component: VerifyComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    VerifyComponent,
    SetPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
