import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  vrm: String;

  constructor (
      private route: ActivatedRoute
  ) {
    // this.vrm = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
