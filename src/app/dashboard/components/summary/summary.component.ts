import { Component, OnInit } from '@angular/core';
import {ReportsService} from "../../../core/services/reports.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import { Observable } from "rxjs";
import { Report } from "../../../core/models/report";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

    report: Report;

  constructor(
      private reports: ReportsService,
      private activeRoute: ActivatedRoute
  ) {
    let vrm;
    this.activeRoute.parent.paramMap.subscribe(
        (params: ParamMap) => {
          vrm = params.get('vrm');

          this.report = this.reports.getReportsForVrm(vrm);
          console.log(this.report)
        }
    );

  }

  ngOnInit() {
  }

}
