import { Component, OnInit } from '@angular/core';
import { ReportsService } from "../../../core/services/reports.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {mergeMap, shareReplay} from "rxjs/operators";
import {Observable} from "rxjs";
import {Report} from "../../../core/models/report";

@Component({
  selector: 'app-mot-history',
  templateUrl: './mot-history.component.html',
  styleUrls: ['./mot-history.component.scss']
})
export class MotHistoryComponent implements OnInit {
  report$: Observable<Report>

  constructor(
    private reports: ReportsService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let id;
    this.report$ = this.activeRoute.parent.paramMap
      .pipe(
      mergeMap((params:ParamMap) => {
        id = params.get('id');
        return this.reports.getReportsByID(id, 'motHistory');
      }),
      shareReplay()
    );
  }

}
