import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Store, select} from "@ngrx/store";
import { CarDataService } from '../../../core/services/car-data.service';
import { GetSummary } from '../../../state/car-data.actions';
import { CarDataSummary } from '../../../state/car-data.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  carDataSummary$: Observable<CarDataSummary>;

  constructor(
    private router: Router,
    // private carDataService: CarDataService,
    private store: Store<{carData: Observable<CarDataSummary>}>
  ) {
    store.select('carData').subscribe((store) => {
      this.carDataSummary$ = store;
    })
  }

  ngOnInit() {
    /*this.check.searchedData = JSON.parse(localStorage.getItem('car'));
    if (!this.check.searchedData) {
      this.router.navigate(['/']);
      return;
    }*/


    // this.carData = this.carDataService.getSummaryData();

  }

  selectPlan(plan) {
    this.router.navigate(['/payment-details'],  { queryParams: { plan: plan } });
  }

}
