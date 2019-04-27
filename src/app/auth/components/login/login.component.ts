import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
      email: new FormControl('', [Validators.required]),
    });
  }

  get password() {
    return this.form.get('password');
  }

  get email() {
    return this.form.get('email');
  }

  login() {

    this.submitted = true;

    this.auth.login(this.form.value)
        .subscribe(res => {
          this.auth.loggedIn = true;
          this.router.navigate(['/main']);
        })
  }

}
