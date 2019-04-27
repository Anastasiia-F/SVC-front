import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signInOrOut() {
    if (this.auth.loggedIn) {
        this.auth.logout()
          .subscribe(() => {
            this.auth.loggedIn = false;
            this.router.navigate(['/']);
          });
    }
    else {
      this.router.navigate(['/auth/login']);
    }
  }

}
