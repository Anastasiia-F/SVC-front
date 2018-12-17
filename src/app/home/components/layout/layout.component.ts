import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  svcReg: string;

  centerContent: any;

  constructor(
  ) { }

  ngOnInit() {
    // if (this.auth.isLoggedIn) {
    //   this.router.navigate(['main']);
    // }
  }

}
