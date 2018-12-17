import { Component, OnInit, HostListener } from '@angular/core';
import * as widget from './widget.json';

@Component({
  selector: 'app-site-benefits',
  templateUrl: './site-benefits.component.html',
  styleUrls: ['./site-benefits.component.scss']
})
export class SiteBenefitsComponent implements OnInit {

  centerContent: any;
  windowSize: string;

  constructor() { }

  ngOnInit() {
    this.centerContent = widget['data'];
    this.windowSize = (window.innerWidth < 960) ? 'lt-md' : 'gt-md';
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    this.windowSize = (window.innerWidth < 960) ? 'lt-md' : 'gt-md';
  }

}
