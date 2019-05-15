import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showTabs: boolean = true;

  constructor (
      private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // console.log(this.route.outlet);
    this.route.queryParams.subscribe((data)=> {
      if(data.reportType === 'basic') {
        this.showTabs = false;
      }
    });
  }

}
