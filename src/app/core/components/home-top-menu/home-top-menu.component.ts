import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-home-top-menu',
  templateUrl: './home-top-menu.component.html',
  styleUrls: ['./home-top-menu.component.scss']
})
export class HomeTopMenuComponent implements OnInit {

  isHomePage: boolean;

  constructor(private router: Router) {
    router.events.subscribe( event => {
      if(event instanceof NavigationStart && event.url === '/') {
        this.isHomePage = true;
      }
      else if(event instanceof NavigationStart) {
        this.isHomePage = false;
      }
    })
  }

  ngOnInit() {
    // this.isHomePage
  }

  scrollTo(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }

}
