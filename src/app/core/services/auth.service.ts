import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Login } from '../models/login';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    loggedIn: boolean;

    url = '/auth';
    constructor(private http: HttpClient) {}

    checkPassword (form) {
      const pass = form.controls.password.value;
      const confirmPassword = form.controls.confirmPassword.value;
      return pass === confirmPassword;
    }

    signUp (user: User) {
      return this.http.post(`${this.url}/signup`, user);
    }

    setPassword (params) {
      return this.http.post(`${this.url}/password/update`, params);
    }

    login (params: Login) {
      return this.http.post(`${this.url}/login`, params);
    }

    logout () {
      return this.http.get(`${this.url}/logout`);
    }

    isLoggedIn() {
      return this.http.get(`${this.url}/session`);
    }
}
