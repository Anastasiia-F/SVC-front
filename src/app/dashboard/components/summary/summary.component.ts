import { Component, OnInit } from '@angular/core';
import {map, mergeMap, shareReplay} from "rxjs/operators";
import {ReportsService} from "../../../core/services/reports.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import { Report } from "../../../core/models/report";
import {Observable} from "rxjs";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

    report$: Observable<Report>;

  constructor(
      private reports: ReportsService,
      private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let id;
    this.report$ = this.activeRoute.parent.paramMap.
    pipe(
      mergeMap((params:ParamMap) => {
        id = params.get('id');
        return this.reports.getReportsByID(id);
      }),
      shareReplay()
    );
  }

}
