import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-top-menu',
  templateUrl: './home-top-menu.component.html',
  styleUrls: ['./home-top-menu.component.scss']
})
export class HomeTopMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTo(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }

}
