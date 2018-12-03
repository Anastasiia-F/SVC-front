import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckService } from '../../../core/services/check.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  carData: any;

  constructor(
    private router: Router,
    private check: CheckService
  ) { }

  ngOnInit() {
    if (!this.check.searchedData) {
      this.router.navigate(['/']);
      return;
    }

    this.carData = this.check.getSummary();
  }

  selectPlan(plan) {
    this.router.navigate(['/payment-details'],  { queryParams: { plan: plan.toLowerCase().replace(' ', '-') } });
  }

}
