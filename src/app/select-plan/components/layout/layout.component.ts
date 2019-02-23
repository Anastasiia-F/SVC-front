import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarDataService } from '../../../core/services/car-data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  carData: any;

  constructor(
    private router: Router,
    private carDataService: CarDataService
  ) { }

  ngOnInit() {
    /*this.check.searchedData = JSON.parse(localStorage.getItem('car'));
    if (!this.check.searchedData) {
      this.router.navigate(['/']);
      return;
    }*/

    this.carData = this.carDataService.getSummaryData();

  }

  selectPlan(plan) {
    this.router.navigate(['/payment-details'],  { queryParams: { plan: plan.toLowerCase().replace(' ', '-') } });
  }

}
