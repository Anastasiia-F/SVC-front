import { Component, OnInit, Input } from '@angular/core';
import { CarDataService } from '../../../core/services/car-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input()
  plan: string;

  summary: any;

  constructor(
    private carData: CarDataService
  ) { }

  ngOnInit() {
    this.plan = this.plan.replace('-', ' ');
    this.summary = this.carData.getSummaryData();
  }

}
