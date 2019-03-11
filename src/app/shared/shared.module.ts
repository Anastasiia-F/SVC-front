import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faAngleDoubleRight,
  faAngleRight,
  faCheck,
  faLock,
  faPlus,
  faTimes,
  faCar,
  faExclamationTriangle,
  faClipboardCheck,
  faClipboardList,
  faGasPump,
  faDollarSign,
  faWrench,
  faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';

import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

library.add(
  faAngleDoubleRight,
  faAngleRight,
  faCheck,
  faCheckCircle,
  faLock,
  faPlus,
  faTimes,
  faCar,
  faExclamationTriangle,
  faClipboardCheck,
  faClipboardList,
  faGasPump,
  faDollarSign,
  faWrench,
  faTachometerAlt
);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FlexLayoutModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class SharedModule { }
