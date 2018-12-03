import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;

  constructor(
    private auth: AuthService,
    private notifier: NotifierService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  setPassword() {
    this.submitted = true;
    if (!this.auth.checkPassword(this.form)) {
      this.notifier.show({
        'type': 'error',
        'message': 'Password is not matched.'
      })
      return;
    };

    this.auth.setPassword(this.form.value).subscribe(res => {
      this.notifier.show({
        'type': 'success',
        'message': 'Password is set.'
      });
      this.router.navigate(['/auth/login']);
    })
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

}
