import { Component, OnInit } from '@angular/core';
import * as widget from './widget.json';

@Component({
  selector: 'app-site-benefits',
  templateUrl: './site-benefits.component.html',
  styleUrls: ['./site-benefits.component.scss']
})
export class SiteBenefitsComponent implements OnInit {

  centerContent: any;

  constructor() { }

  ngOnInit() {
    this.centerContent = widget['data'];
  }

}
