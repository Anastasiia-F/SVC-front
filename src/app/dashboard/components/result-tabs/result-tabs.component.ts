import { Component, OnInit } from '@angular/core';
import {
  faClipboardList,
  faClipboardCheck,
  faCarAlt,
  faDollarSign,
  faExclamationTriangle,
  faGasPump,
  faTachometerAlt,
  faWrench
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import * as data from './widget.json';

@Component({
  selector: 'app-result-tabs',
  templateUrl: './result-tabs.component.html',
  styleUrls: ['./result-tabs.component.scss']
})
export class ResultTabsComponent implements OnInit {

  tabs = [];

  constructor() { }

  ngOnInit() {
    library.add(
      faClipboardList,
      faClipboardCheck,
      faCarAlt,
      faDollarSign,
      faExclamationTriangle,
      faGasPump,
      faTachometerAlt,
      faWrench
    );

    this.tabs = data['tabs'] || [];
  }

}
