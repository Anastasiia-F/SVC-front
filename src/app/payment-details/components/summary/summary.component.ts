import { Component, OnInit, Input } from '@angular/core';
import { CheckService } from '../../../core/services/check.service';

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
    private check: CheckService
  ) { }

  ngOnInit() {
    this.plan = this.plan.replace('-', ' ');
    this.summary = this.check.getSummary();
  }

}
