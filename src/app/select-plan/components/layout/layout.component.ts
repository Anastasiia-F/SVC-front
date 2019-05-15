import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { CarDataSummary } from '../../../state/car-data.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  carDataSummary: CarDataSummary;

  constructor(
    private router: Router,
    private store: Store<{carData: CarDataSummary}>
  ) {
    store.select('carData')
      .subscribe((result)=> {
        this.carDataSummary = result;
      });
  }

  ngOnInit() {}

  selectPlan(params) {
    this.router.navigate(['/payment-details'],  {
      queryParams: {
        plan: params.plan,
        price: params.price,
        vrm: this.carDataSummary.vrm
    } });
  }

}
