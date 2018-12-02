import { Component, OnInit } from '@angular/core';
import * as widget from './widget.json';

@Component({
  selector: 'app-plan-features',
  templateUrl: './plan-features.component.html',
  styleUrls: ['./plan-features.component.scss']
})
export class PlanFeaturesComponent implements OnInit {

  widget: any;
  features = [];

  constructor() { }

  ngOnInit() {
    this.widget = widget['data'];
    this.features = this.widget.features;
    console.log(this.features);
  }

  isSupported (index) {
    const basic = this.widget.plans.find(p => p.title === 'Basic Check');
    return basic.not_supported.indexOf(index) > -1 ;
  }

}
