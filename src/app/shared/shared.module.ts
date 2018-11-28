import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faAngleDoubleRight,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faAngleDoubleRight,
  faCheck
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
    FontAwesomeModule
  ]
})
export class SharedModule { }
