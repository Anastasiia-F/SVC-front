import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Store, select} from "@ngrx/store";
import { NotifierService } from 'angular-notifier';
import { CarDataService } from '../../../core/services/car-data.service';
import { FetchSummary } from '../../../state/car-data.actions';
import {CarDataSummary} from "../../../state/car-data.interface";

@Component({
  selector: 'app-reg-input',
  templateUrl: './reg-input.component.html',
  styleUrls: ['./reg-input.component.scss']
})
export class RegInputComponent implements OnInit {

  svcReg: string;

  @Input() isFooter: boolean;

  constructor(
    private router: Router,
    private notifier: NotifierService,
    // private carData: CarDataService,
    private store: Store<{carData: CarDataSummary}>

  ) {
  }

  ngOnInit() {
  }

  search() {

    this.store.dispatch(new FetchSummary(this.svcReg));

  }

}
