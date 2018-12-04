import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.auth.isLoggedIn()
      .pipe(
        map(res => {
          localStorage.setItem('email', res['user']);
          this.auth.loggedIn = true;
          return true;
        }),
        catchError(() => {
          this.auth.logout().subscribe(() => {
            this.auth.loggedIn = false;
          });
          this.router.navigate(['/welcome']);
          return of(false);
        })
      );
  }

}
