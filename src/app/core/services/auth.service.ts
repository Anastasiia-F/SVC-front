import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    url = '/account';
    constructor(private http: HttpClient) {}

    signUp (email: string) {
        return this.http.post(`${this.url}/signup`, {email: email});
    }
}
