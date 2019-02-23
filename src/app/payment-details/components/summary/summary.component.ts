import { Component, OnInit, Input } from '@angular/core';
import { CarDataService } from '../../../core/services/car-data.service';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {CarDataSummary} from "../../../state/car-data.interface";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input()
  plan: string;

  summary$: Observable<CarDataSummary>;

  constructor(
      private store: Store<{carData: Observable<CarDataSummary>}>
  ) {
    store.select('carData').subscribe((store) => {
      this.summary$ = store;
    })
  }

  ngOnInit() {
    this.plan = this.plan.replace('-', ' ');
    console.log(this.plan);
  }

}
